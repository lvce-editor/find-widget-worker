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
import * as FindWidgetHandleReplaceFocus from '../FindWidgetHandleReplaceFocus/FindWidgetHandleReplaceFocus.ts'
import { handleResizerPointerDown } from '../FindWidgetHandleResizerPointerDown/FindWidgetHandleResizerPointerDown.ts'
import { handleResizerPointerMove } from '../FindWidgetHandleResizerPointerMove/FindWidgetHandleResizerPointerMove.ts'
import { handleResizerPointerUp } from '../FindWidgetHandleResizerPointerUp/FindWidgetHandleResizerPointerUp.ts'
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
  'FindWidget.create': Create.create,
  'FindWidget.diff2': Diff2.diff2,
  'FindWidget.close': WrapCommand.wrapCommand2(close),
  'FindWidget.dispose': Dispose.dispose,
  'FindWidget.focusCloseButton': WrapCommand.wrapCommand2(FindWidgetFocusCloseButton.focusCloseButton),
  'FindWidget.focusElement': WrapCommand.wrapCommand2(focusElement),
  'FindWidget.focusFirst': WrapCommand.wrapCommand2(FindWidgetFocusIndex.focusFirst),
  'FindWidget.focusIndex': WrapCommand.wrapCommand2(FindWidgetFocusIndex.focusIndex),
  'FindWidget.focusLast': WrapCommand.wrapCommand2(FindWidgetFocusIndex.focusLast),
  'FindWidget.focusNext': WrapCommand.wrapCommand2(FindWidgetFocusIndex.focusNext),
  'FindWidget.focusNextElement': WrapCommand.wrapCommand2(focusNextElement),
  'FindWidget.focusPrevious': WrapCommand.wrapCommand2(FindWidgetFocusIndex.focusPrevious),
  'FindWidget.focusPreviousElement': WrapCommand.wrapCommand2(focusPreviousElement),
  'FindWidget.focusReplace': WrapCommand.wrapCommand2(FindWidgetFocusReplace.focusReplace),
  'FindWidget.focusReplaceAllButton': WrapCommand.wrapCommand2(FindWidgetFocusReplaceAllButton.focusReplaceAllButton),
  'FindWidget.getCommandIds': WrapCommand.getCommandIds,
  'FindWidget.getKeyBindings': getKeyBindings,
  'FindWidget.handleBlur': WrapCommand.wrapCommand2(FindWidgetHandleBlur.handleBlur),
  'FindWidget.handleClickButton': WrapCommand.wrapCommand2(handleClickButton),
  'FindWidget.handleClickClose': WrapCommand.wrapCommand2(HandleClickClose.handleClickClose),
  'FindWidget.handleInput': WrapCommand.wrapCommand2(HandleInput.handleInput),
  'FindWidget.handleReplaceFocus': WrapCommand.wrapCommand2(FindWidgetHandleReplaceFocus.handleReplaceFocus),
  'FindWidget.handleReplaceInput': WrapCommand.wrapCommand2(handleReplaceInput),
  'FindWidget.handleResizerPointerDown': WrapCommand.wrapCommand2(handleResizerPointerDown),
  'FindWidget.handleResizerPointerMove': WrapCommand.wrapCommand2(handleResizerPointerMove),
  'FindWidget.handleResizerPointerUp': WrapCommand.wrapCommand2(handleResizerPointerUp),
  'FindWidget.loadContent': WrapCommand.wrapCommand2(LoadContent.loadContent),
  'FindWidget.preventDefaultBrowserFind': WrapCommand.wrapCommand2(PreventDefaultBrowserFind.preventDefaultBrowserFind),
  'FindWidget.render2': Render2.render2,
  'FindWidget.replace': WrapCommand.wrapCommand2(replace),
  'FindWidget.replaceAll': WrapCommand.wrapCommand2(replaceAll),
  'FindWidget.resize': WrapCommand.wrapCommand2(resize),
  'FindWidget.saveState': WrapCommand.wrapGetter(saveState),
  'FindWidget.terminate': terminate,
  'FindWidget.toggleMatchCase': WrapCommand.wrapCommand2(toggleMatchCase),
  'FindWidget.toggleReplace': WrapCommand.wrapCommand2(FindWidgetToggleReplace.toggleReplace),
  'FindWidget.toggleUseRegularExpression': WrapCommand.wrapCommand2(toggleUseRegularExpression),
  'FindWidget.togglePreserveCase': WrapCommand.wrapCommand2(togglePreserveCase),
  'FindWidget.toggleMatchWholeWord': WrapCommand.wrapCommand2(toggleMatchWholeWord),
}
