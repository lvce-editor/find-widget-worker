import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as Icon from '../Icon/Icon.ts'
import * as InputName from '../InputName/InputName.ts'

export const getFindButtons = (): readonly ISearchFieldButton[] => {
  return [
    {
      checked: false,
      icon: Icon.MatchCase,
      title: 'Match Case',
      name: InputName.MatchCase,
    },
    {
      checked: false,
      icon: Icon.MatchWholeWord,
      title: 'Match Whole Word',
      name: InputName.MatchWholeWord,
    },
    {
      checked: false,
      icon: Icon.UseRegularExpression,
      title: 'Use Regular Expression',
      name: InputName.UseRegularExpression,
    },
  ]
}
