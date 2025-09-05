import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'

export const getFindButtons = (): readonly ISearchFieldButton[] => {
  return [
    {
      checked: false,
      icon: 'PreserveCase',
      title: 'Preserve Case',
      name: InputName.PreserveCase,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
}
