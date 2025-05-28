import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as FindWidgetHandleBlur from '../FindWidgetHandleBlur/FindWidgetHandleBlur.ts'
import * as HandleInput from '../FindWidgetHandleInput/FindWidgetHandleInput.ts'
import * as WrapCommand from '../FindWidgetStates/FindWidgetStates.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as FindWidgetFocusIndex from '../FindWidgetFocusIndex/FindWidgetFocusIndex.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'FindWidget.create': Create.create,
  'FindWidget.diff2': Diff2.diff2,
  'FindWidget.focusFirst': FindWidgetFocusIndex.focusFirst,
  'FindWidget.focusIndex': FindWidgetFocusIndex.focusIndex,
  'FindWidget.focusLast': FindWidgetFocusIndex.focusLast,
  'FindWidget.focusNext': FindWidgetFocusIndex.focusNext,
  'FindWidget.focusPrevious': FindWidgetFocusIndex.focusPrevious,
  'FindWidget.getCommandIds': GetCommandIds.getCommandIds,
  'FindWidget.handleBlur': FindWidgetHandleBlur.handleBlur,
  'FindWidget.handleInput': HandleInput.handleInput,
  'FindWidget.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'FindWidget.render2': Render2.render2,
  'FindWidget.terminate': Terminate.terminate,
}
