import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as InputName from '../InputName/InputName.ts'

export const getFindButtons = (): readonly ISearchFieldButton[] => {
  const title = FindStrings.preserveCase()
  return [
    {
      checked: false,
      icon: 'PreserveCase',
      title,
      name: InputName.PreserveCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
}
