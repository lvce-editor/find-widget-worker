import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'

export const getFindButtons = (): readonly ISearchFieldButton[] => {
  return [
    {
      checked: false,
      icon: 'MatchCase',
      title: 'Match Case',
    },
  ]
}
