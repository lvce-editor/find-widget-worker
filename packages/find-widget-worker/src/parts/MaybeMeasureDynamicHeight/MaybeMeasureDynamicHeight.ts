import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'
import * as GetFindWidgetButtons from '../GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as GetFindWidgetButtonsEnabled from '../GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'
import * as GetFindWidgetVirtualDom from '../GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as GetMatchCountText from '../GetMatchCountText/GetMatchCountText.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Render2 from '../Render2/Render2.ts'

const pendingTimers: Map<number, number> = new Map()

const buildDom = (state: FindWidgetState): readonly VirtualDomNode[] => {
  const { matchCount, value, replaceExpanded, matchCase, matchWholeWord, useRegularExpression, preserveCase } = state
  const matchCountText = GetMatchCountText.getMatchCountText(state.matchIndex, state.matchCount)
  const { findButtonsEnabled, replaceButtonsEnabled } = GetFindWidgetButtonsEnabled.getFindWidgetButtonsEnabled(matchCount, value)
  const { findButtons, replaceButtons, findFieldButtons, replaceFieldButtons } = GetFindWidgetButtons.getFindWidgetButtons(
    findButtonsEnabled,
    replaceButtonsEnabled,
    matchCase,
    matchWholeWord,
    useRegularExpression,
    preserveCase,
  )
  const dom = GetFindWidgetVirtualDom.getFindWidgetVirtualDom(
    matchCountText,
    replaceExpanded,
    findButtons,
    findFieldButtons,
    replaceButtons,
    replaceFieldButtons,
    matchCount,
    value,
  )
  return dom
}

const applyMeasuredHeight = (uid: number, measuredHeight: number): void => {
  const { newState } = FindWidgetStates.get(uid)
  if (!newState) {
    return
  }
  if (newState.height === measuredHeight) {
    return
  }
  const updatedState: FindWidgetState = {
    ...newState,
    height: measuredHeight,
  }
  FindWidgetStates.set(uid, newState, updatedState)
  const diffResult = Diff2.diff2(uid)
  // Trigger render to apply new bounds/css
  Render2.render2(uid, diffResult)
}

const measureNow = async (uid: number): Promise<void> => {
  try {
    const { newState } = FindWidgetStates.get(uid)
    if (!newState || !newState.measureDynamicHeight) {
      return
    }
    const dom = buildDom(newState)
    const rect = { x: newState.x, y: newState.y, width: newState.width, height: newState.height }
    const measuredHeight: number = await EditorWorker.invoke('Editor.measureVirtualDomHeight', newState.editorUid, dom, rect)
    if (typeof measuredHeight === 'number' && Number.isFinite(measuredHeight)) {
      applyMeasuredHeight(uid, measuredHeight)
    }
  } catch {
    // ignore measurement errors
  }
}

export const schedule = (state: FindWidgetState): void => {
  if (!state.measureDynamicHeight) {
    return
  }
  const { uid } = state
  const existing = pendingTimers.get(uid)
  if (existing) {
    clearTimeout(existing)
  }
  const timer = setTimeout(() => {
    pendingTimers.delete(uid)
    // fire-and-forget
    void measureNow(uid)
  }, 20) as unknown as number
  pendingTimers.set(uid, timer)
}

export const cancel = (uid: number): void => {
  const existing = pendingTimers.get(uid)
  if (existing) {
    clearTimeout(existing)
    pendingTimers.delete(uid)
  }
}
