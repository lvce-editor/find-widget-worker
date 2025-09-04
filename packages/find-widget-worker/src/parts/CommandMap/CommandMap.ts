import { terminate } from '@lvce-editor/viewlet-registry'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as FindWidgetFocusCloseButton from '../FindWidgetFocusCloseButton/FindWidgetFocusCloseButton.ts'
import * as FindWidgetFocusIndex from '../FindWidgetFocusIndex/FindWidgetFocusIndex.ts'
import * as FindWidgetFocusReplace from '../FindWidgetFocusReplace/FindWidgetFocusReplace.ts'
import * as FindWidgetFocusReplaceAllButton from '../FindWidgetFocusReplaceAllButton/FindWidgetFocusReplaceAllButton.ts'
import * as FindWidgetHandleBlur from '../FindWidgetHandleBlur/FindWidgetHandleBlur.ts'
import * as HandleClickClose from '../FindWidgetHandleClickClose/FindWidgetHandleClickClose.ts'
import * as HandleInput from '../FindWidgetHandleInput/FindWidgetHandleInput.ts'
import * as WrapCommand from '../FindWidgetStates/FindWidgetStates.ts'
import * as FindWidgetToggleReplace from '../FindWidgetToggleReplace/FindWidgetToggleReplace.ts'
import { handleReplaceInput } from '../HandleReplaceInput/HandleReplaceInput.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as PreventDefaultBrowserFind from '../PreventDefaultBrowserFind/PreventDefaultBrowserFind.ts'
import * as Render2 from '../Render2/Render2.ts'
import { replace } from '../Replace/Replace.ts'
import { replaceAll } from '../ReplaceAll/ReplaceAll.ts'

export const commandMap = {
  'FindWidget.create': Create.create,
  'FindWidget.diff2': Diff2.diff2,
  'FindWidget.dispose': Dispose.dispose,
  'FindWidget.focusCloseButton': WrapCommand.wrapCommand(FindWidgetFocusCloseButton.focusCloseButton),
  'FindWidget.focusFirst': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusFirst),
  'FindWidget.focusIndex': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusIndex),
  'FindWidget.focusLast': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusLast),
  'FindWidget.focusNext': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusNext),
  'FindWidget.focusPrevious': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusPrevious),
  'FindWidget.focusReplace': WrapCommand.wrapCommand(FindWidgetFocusReplace.focusReplace),
  'FindWidget.focusReplaceAllButton': WrapCommand.wrapCommand(FindWidgetFocusReplaceAllButton.focusReplaceAllButton),
  'FindWidget.getCommandIds': WrapCommand.getCommandIds,
  'FindWidget.handleBlur': WrapCommand.wrapCommand(FindWidgetHandleBlur.handleBlur),
  'FindWidget.handleClickClose': WrapCommand.wrapCommand(HandleClickClose.handleClickClose),
  'FindWidget.handleInput': WrapCommand.wrapCommand(HandleInput.handleInput),
  'FindWidget.handleReplaceInput': WrapCommand.wrapCommand(handleReplaceInput),
  'FindWidget.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'FindWidget.preventDefaultBrowserFind': WrapCommand.wrapCommand(PreventDefaultBrowserFind.preventDefaultBrowserFind),
  'FindWidget.render2': Render2.render2,
  'FindWidget.terminate': terminate,
  'FindWidget.toggleReplace': WrapCommand.wrapCommand(FindWidgetToggleReplace.toggleReplace),
  'FindWidget.replace': WrapCommand.wrapCommand(replace),
  'FindWidget.replaceAll': WrapCommand.wrapCommand(replaceAll),
}
