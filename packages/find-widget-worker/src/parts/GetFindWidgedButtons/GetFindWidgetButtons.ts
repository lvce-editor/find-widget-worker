import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { FindWidgetButtons } from '../FindWidgetButtons/FindWidgetButtons.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'
import * as Names from '../InputName/InputName.ts'

export const getFindWidgetButtons = (findButtonsEnabled: boolean, replaceButtonsEnabled: boolean): FindWidgetButtons => {
  const findFieldButtons: readonly ISearchFieldButton[] = [
    {
      checked: false,
      icon: Icon.MatchCase,
      title: FindStrings.matchCase(),
      name: InputName.MatchCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      checked: false,
      icon: Icon.MatchWholeWord,
      title: FindStrings.matchWholeWord(),
      name: InputName.MatchWholeWord,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      checked: false,
      icon: Icon.UseRegularExpression,
      title: FindStrings.useRegularExpression(),
      name: InputName.UseRegularExpression,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
  const findButtons: readonly FindWidgetButton[] = [
    {
      label: FindStrings.previousMatch(),
      icon: Icon.ArrowUp,
      disabled: !findButtonsEnabled,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
      name: Names.FocusPrevious,
    },
    {
      label: FindStrings.nextMatch(),
      icon: Icon.ArrowDown,
      disabled: !findButtonsEnabled,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
      name: Names.FocusNext,
    },
    {
      label: FindStrings.close(),
      icon: Icon.Close,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickClose,
      name: Names.Close,
    },
  ]
  const replaceButtons: readonly FindWidgetButton[] = [
    {
      label: FindStrings.replace(),
      icon: Icon.Replace,
      disabled: !replaceButtonsEnabled,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.Replace,
    },
    {
      label: FindStrings.replaceAll(),
      icon: Icon.ReplaceAll,
      disabled: !replaceButtonsEnabled,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.ReplaceAll,
    },
  ]
  return {
    findFieldButtons,
    findButtons,
    replaceButtons,
  }
}
