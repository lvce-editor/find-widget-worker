import { terminate } from '@lvce-editor/viewlet-registry'
import { close } from '../Close/Close.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as FindWidgetFocusCloseButton from '../FindWidgetFocusCloseButton/FindWidgetFocusCloseButton.ts'
import * as FindWidgetFocusIndex from '../FindWidgetFocusIndex/FindWidgetFocusIndex.ts'
import * as FindWidgetFocusReplace from '../FindWidgetFocusReplace/FindWidgetFocusReplace.ts'
import * as FindWidgetFocusReplaceAllButton from '../FindWidgetFocusReplaceAllButton/FindWidgetFocusReplaceAllButton.ts'
import * as FindWidgetHandleBlur from '../FindWidgetHandleBlur/FindWidgetHandleBlur.ts'
import { handleClickButton } from '../FindWidgetHandleClickButton/FindWidgetHandleClickButton.ts'
import * as HandleClickClose from '../FindWidgetHandleClickClose/FindWidgetHandleClickClose.ts'
import { handleFindFocus } from '../FindWidgetHandleFindFocus/FindWidgetHandleFindFocus.ts'
import * as FindWidgetHandleReplaceFocus from '../FindWidgetHandleReplaceFocus/FindWidgetHandleReplaceFocus.ts'
import { handleResizerPointerDown } from '../FindWidgetHandleResizerPointerDown/FindWidgetHandleResizerPointerDown.ts'
import { handleResizerPointerMove } from '../FindWidgetHandleResizerPointerMove/FindWidgetHandleResizerPointerMove.ts'
import { handleResizerPointerUp } from '../FindWidgetHandleResizerPointerUp/FindWidgetHandleResizerPointerUp.ts'
import { handleToggleReplaceFocus } from '../FindWidgetHandleToggleReplaceFocus/FindWidgetHandleToggleReplaceFocus.ts'
import * as WrapCommand from '../FindWidgetStates/FindWidgetStates.ts'
import { toggleMatchCase } from '../FindWidgetToggleMatchCase/FindWidgetToggleMatchCase.ts'
import { toggleMatchWholeWord } from '../FindWidgetToggleMatchWholeWord/FindWidgetToggleMatchWholeWord.ts'
import { togglePreserveCase } from '../FindWidgetTogglePreserveCase/FindWidgetTogglePreserveCase.ts'
import * as FindWidgetToggleReplace from '../FindWidgetToggleReplace/FindWidgetToggleReplace.ts'
import { toggleUseRegularExpression } from '../FindWidgetToggleUseRegularExpression/FindWidgetToggleUseRegularExpression.ts'
import { focusElement } from '../FocusElement/FocusElement.ts'
import { focusNextElement } from '../FocusNextElement/FocusNextElement.ts'
import { focusPreviousElement } from '../FocusPreviousElement/FocusPreviousElement.ts'
import { getKeyBindings } from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import { handleReplaceInput } from '../HandleReplaceInput/HandleReplaceInput.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as PreventDefaultBrowserFind from '../PreventDefaultBrowserFind/PreventDefaultBrowserFind.ts'
import * as Render2 from '../Render2/Render2.ts'
import { replace } from '../Replace/Replace.ts'
import { replaceAll } from '../ReplaceAll/ReplaceAll.ts'
import { resize } from '../Resize/Resize.ts'
import { saveState } from '../SaveState/SaveState.ts'

export const commandMap = {
  'FindWidget.close': WrapCommand.wrapCommand(close),
  'FindWidget.create': Create.create,
  'FindWidget.diff2': Diff2.diff2,
  'FindWidget.dispose': Dispose.dispose,
  'FindWidget.focusCloseButton': WrapCommand.wrapCommand(FindWidgetFocusCloseButton.focusCloseButton),
  'FindWidget.focusElement': WrapCommand.wrapCommand(focusElement),
  'FindWidget.focusFirst': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusFirst),
  'FindWidget.focusIndex': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusIndex),
  'FindWidget.focusLast': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusLast),
  'FindWidget.focusNext': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusNext),
  'FindWidget.focusNextElement': WrapCommand.wrapCommand(focusNextElement),
  'FindWidget.focusPrevious': WrapCommand.wrapCommand(FindWidgetFocusIndex.focusPrevious),
  'FindWidget.focusPreviousElement': WrapCommand.wrapCommand(focusPreviousElement),
  'FindWidget.focusReplace': WrapCommand.wrapCommand(FindWidgetFocusReplace.focusReplace),
  'FindWidget.focusReplaceAllButton': WrapCommand.wrapCommand(FindWidgetFocusReplaceAllButton.focusReplaceAllButton),
  'FindWidget.getCommandIds': WrapCommand.getCommandIds,
  'FindWidget.getKeyBindings': getKeyBindings,
  'FindWidget.handleBlur': WrapCommand.wrapCommand(FindWidgetHandleBlur.handleBlur),
  'FindWidget.handleClickButton': WrapCommand.wrapCommand(handleClickButton),
  'FindWidget.handleClickClose': WrapCommand.wrapCommand(HandleClickClose.handleClickClose),
  'FindWidget.handleFocus': WrapCommand.wrapCommand(handleFindFocus),
  'FindWidget.handleInput': WrapCommand.wrapCommand(HandleInput.handleInput),
  'FindWidget.handleReplaceFocus': WrapCommand.wrapCommand(FindWidgetHandleReplaceFocus.handleReplaceFocus),
  'FindWidget.handleReplaceInput': WrapCommand.wrapCommand(handleReplaceInput),
  'FindWidget.handleResizerPointerDown': WrapCommand.wrapCommand(handleResizerPointerDown),
  'FindWidget.handleResizerPointerMove': WrapCommand.wrapCommand(handleResizerPointerMove),
  'FindWidget.handleResizerPointerUp': WrapCommand.wrapCommand(handleResizerPointerUp),
  'FindWidget.handleToggleReplaceFocus': WrapCommand.wrapCommand(handleToggleReplaceFocus),
  'FindWidget.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'FindWidget.preventDefaultBrowserFind': WrapCommand.wrapCommand(PreventDefaultBrowserFind.preventDefaultBrowserFind),
  'FindWidget.render2': Render2.render2,
  'FindWidget.replace': WrapCommand.wrapCommand(replace),
  'FindWidget.replaceAll': WrapCommand.wrapCommand(replaceAll),
  'FindWidget.resize': WrapCommand.wrapCommand(resize),
  'FindWidget.saveState': WrapCommand.wrapGetter(saveState),
  'FindWidget.terminate': terminate,
  'FindWidget.toggleMatchCase': WrapCommand.wrapCommand(toggleMatchCase),
  'FindWidget.toggleMatchWholeWord': WrapCommand.wrapCommand(toggleMatchWholeWord),
  'FindWidget.togglePreserveCase': WrapCommand.wrapCommand(togglePreserveCase),
  'FindWidget.toggleReplace': WrapCommand.wrapCommand(FindWidgetToggleReplace.toggleReplace),
  'FindWidget.toggleUseRegularExpression': WrapCommand.wrapCommand(toggleUseRegularExpression),
}
