import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as Icon from '../Icon/Icon.ts'

export const getFindButtons = (): readonly ISearchFieldButton[] => {
  return [
    {
      checked: false,
      icon: Icon.MatchCase,
      title: 'Match Case',
    },
    {
      checked: false,
      icon: Icon.MatchWholeWord,
      title: 'Match Whole Word',
    },
    {
      checked: false,
      icon: Icon.UseRegularExpression,
      title: 'Use Regular Expression',
    },
  ]
}
