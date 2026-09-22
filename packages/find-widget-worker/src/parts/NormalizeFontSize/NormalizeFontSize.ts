export type FindWidgetFontSize = number | 'inherit'

const MIN_FONT_SIZE = 10
const MAX_FONT_SIZE = 100

const EMPTY_VALUES: readonly unknown[] = [undefined, null, '', 0]

export const normalizeFontSize = (value: unknown): FindWidgetFontSize => {
  let result: FindWidgetFontSize = 'inherit'
  if (!EMPTY_VALUES.includes(value)) {
    let numericValue = NaN
    if (typeof value === 'number') {
      numericValue = value
    } else if (typeof value === 'string' && value.trim()) {
      numericValue = Number(value)
    }
    if (Number.isFinite(numericValue)) {
      result = Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, numericValue))
    }
  }
  return result
}
