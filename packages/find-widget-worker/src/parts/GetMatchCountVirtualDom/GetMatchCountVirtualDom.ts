import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as GetFindMatchCountClassName from '../GetFindMatchCountClassName/GetFindMatchCountClassName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMatchCountVirtualDom = (matchCountText: string, matchCount: number, hasValue: boolean): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, hasValue),
      childCount: 1,
    },
    text(matchCountText),
  ]
}
