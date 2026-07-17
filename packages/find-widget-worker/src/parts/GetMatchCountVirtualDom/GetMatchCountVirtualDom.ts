import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as GetFindMatchCountClassName from '../GetFindMatchCountClassName/GetFindMatchCountClassName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMatchCountVirtualDom = (
  matchCountText: string,
  matchCount: number,
  hasValue: boolean,
  hasError = false,
): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, hasValue),
      ...(hasError && { id: 'FindWidgetInputError', role: AriaRoles.Alert }),
      type: VirtualDomElements.Div,
    },
    text(matchCountText),
  ]
}
