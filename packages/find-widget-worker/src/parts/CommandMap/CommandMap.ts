import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as WrapCommand from '../FindWidgetStates/FindWidgetStates.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'ColorPicker.create': Create.create,
  'ColorPicker.diff2': Diff2.diff2,
  'ColorPicker.getCommandIds': GetCommandIds.getCommandIds,
  'ColorPicker.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'ColorPicker.render2': Render2.render2,
  'ColorPicker.terminate': Terminate.terminate,
}
