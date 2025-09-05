import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'

export const getFindButtons = (matchCase: boolean, matchWholeWord: boolean, useRegularExpression: boolean): readonly ISearchFieldButton[] => {
  return [
    {
      checked: matchCase,
      icon: Icon.MatchCase,
      title: 'Match Case',
      name: InputName.MatchCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      checked: matchWholeWord,
      icon: Icon.MatchWholeWord,
      title: 'Match Whole Word',
      name: InputName.MatchWholeWord,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      checked: useRegularExpression,
      icon: Icon.UseRegularExpression,
      title: 'Use Regular Expression',
      name: InputName.UseRegularExpression,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
}
