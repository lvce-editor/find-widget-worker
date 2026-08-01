import { KeyCode } from '@lvce-editor/constants'
import { KeyModifier } from '@lvce-editor/constants'
import { WhenExpression } from '@lvce-editor/constants'
import * as FocusKey from '../FocusKey/FocusKey.ts'

const focusContexts = [
  WhenExpression.FocusFindWidget,
  WhenExpression.FocusFindWidgetReplace,
  FocusKey.FocusFindWidgetOptions,
  WhenExpression.FocusFindWidgetPreviousMatchButton,
  WhenExpression.FocusFindWidgetNextMatchButton,
  WhenExpression.FocusFindWidgetCloseButton,
  WhenExpression.FocusFindWidgetReplaceButton,
  WhenExpression.FocusFindWidgetReplaceAllButton,
  FocusKey.FocusFindWidgetToggleReplace,
] as const

const getFocusNavigationKeyBindings = (): readonly any[] => {
  return focusContexts.flatMap((when) => [
    {
      command: 'FindWidget.focusNextElement',
      key: KeyCode.Tab,
      when,
    },
    {
      command: 'FindWidget.focusPreviousElement',
      key: KeyModifier.Shift | KeyCode.Tab,
      when,
    },
  ])
}

export const getKeyBindings = (): readonly any[] => {
  return [
    {
      command: 'FindWidget.close',
      key: KeyCode.Escape,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusNext',
      key: KeyCode.Enter,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusPrevious',
      key: KeyModifier.Shift | KeyCode.Enter,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.preventDefaultBrowserFind',
      key: KeyModifier.CtrlCmd | KeyCode.KeyF,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusPrevious',
      key: KeyModifier.Shift | KeyCode.F4,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusNext',
      key: KeyCode.F4,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.replace',
      key: KeyCode.Enter,
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      command: 'FindWidget.replaceAll',
      key: KeyModifier.Alt | KeyModifier.CtrlCmd | KeyCode.Enter,
      when: WhenExpression.FocusFindWidgetReplace,
    },
    ...getFocusNavigationKeyBindings(),
  ]
}
