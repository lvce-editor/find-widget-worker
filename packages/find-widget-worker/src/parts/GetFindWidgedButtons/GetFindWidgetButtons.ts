import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { FindWidgetButtons } from '../FindWidgetButtons/FindWidgetButtons.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'
import * as Names from '../InputName/InputName.ts'

export const getFindWidgetButtons = (
  findButtonsEnabled: boolean,
  replaceButtonsEnabled: boolean,
  matchCase: boolean,
  matchWholeWord: boolean,
  useRegularExpression: boolean,
  preserveCase: boolean,
): FindWidgetButtons => {
  const findFieldButtons: readonly ISearchFieldButton[] = [
    {
      checked: matchCase,
      icon: Icon.MatchCase,
      name: InputName.MatchCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: FindStrings.matchCase(),
    },
    {
      checked: matchWholeWord,
      icon: Icon.MatchWholeWord,
      name: InputName.MatchWholeWord,
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: FindStrings.matchWholeWord(),
    },
    {
      checked: useRegularExpression,
      icon: Icon.UseRegularExpression,
      name: InputName.UseRegularExpression,
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: FindStrings.useRegularExpression(),
    },
  ]
  const replaceFieldButtons: ISearchFieldButton[] = [
    {
      checked: preserveCase,
      icon: 'PreserveCase',
      name: InputName.PreserveCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: FindStrings.preserveCase(),
    },
  ]
  const findButtons: readonly FindWidgetButton[] = [
    {
      disabled: !findButtonsEnabled,
      icon: Icon.ArrowUp,
      label: FindStrings.previousMatch(),
      name: Names.FocusPrevious,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
    },
    {
      disabled: !findButtonsEnabled,
      icon: Icon.ArrowDown,
      label: FindStrings.nextMatch(),
      name: Names.FocusNext,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
    },
    {
      disabled: false,
      icon: Icon.Close,
      label: FindStrings.close(),
      name: Names.Close,
      onClick: DomEventListenerFunctions.HandleClickClose,
    },
  ]
  const replaceButtons: readonly FindWidgetButton[] = [
    {
      disabled: !replaceButtonsEnabled,
      icon: Icon.Replace,
      label: FindStrings.replace(),
      name: Names.Replace,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      disabled: !replaceButtonsEnabled,
      icon: Icon.ReplaceAll,
      label: FindStrings.replaceAll(),
      name: Names.ReplaceAll,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
  return {
    findButtons,
    findFieldButtons,
    replaceButtons,
    replaceFieldButtons,
  }
}
