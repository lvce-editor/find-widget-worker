import * as I18nString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const noResults = (): string => {
  return I18nString.i18nString(UiStrings.NoResults)
}

export const matchOf = (matchIndex: number, matchCount: number): string => {
  return I18nString.i18nString(UiStrings.MatchOf, {
    PH1: matchIndex,
    PH2: matchCount,
  })
}

export const matchesFoundFor = (matchIndex: number, matchCount: number, value: string): string => {
  return I18nString.i18nString(UiStrings.MatchesFoundFor, {
    PH1: matchIndex,
    PH2: matchCount,
    PH3: value,
  })
}

export const previousMatch = (): string => {
  return I18nString.i18nString(UiStrings.PreviousMatch)
}

export const nextMatch = (): string => {
  return I18nString.i18nString(UiStrings.NextMatch)
}

export const close = (): string => {
  return I18nString.i18nString(UiStrings.Close)
}

export const find = () => {
  return I18nString.i18nString(UiStrings.Find)
}

export const replace = () => {
  return I18nString.i18nString(UiStrings.Replace)
}

export const replaceAll = () => {
  return I18nString.i18nString(UiStrings.ReplaceAll)
}
