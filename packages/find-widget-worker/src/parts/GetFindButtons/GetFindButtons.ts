import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'

export const getFindButtons = (matchCase: boolean, matchWholeWord: boolean, useRegularExpression: boolean): readonly ISearchFieldButton[] => {
  return [
    {
      checked: matchCase,
      icon: Icon.MatchCase,
      title: FindStrings.matchCase(),
      name: InputName.MatchCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      checked: matchWholeWord,
      icon: Icon.MatchWholeWord,
      title: FindStrings.matchWholeWord(),
      name: InputName.MatchWholeWord,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      checked: useRegularExpression,
      icon: Icon.UseRegularExpression,
      title: FindStrings.useRegularExpression(),
      name: InputName.UseRegularExpression,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
}
