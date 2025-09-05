import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'

export interface FindWidgetButtons {
  readonly findButtons: readonly FindWidgetButton[]
  readonly replaceButtons: readonly FindWidgetButton[]
  readonly findFieldButtons: readonly ISearchFieldButton[]
}
