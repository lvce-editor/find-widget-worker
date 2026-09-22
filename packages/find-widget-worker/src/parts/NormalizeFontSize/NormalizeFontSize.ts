export type FindWidgetFontSize = number | 'inherit'

export const MIN_FONT_SIZE = 10
export const MAX_FONT_SIZE = 100

export const normalizeFontSize = (value: unknown): FindWidgetFontSize => {
  if (value === undefined || value === null || value === '' || value === 0) {
    return 'inherit'
  }
  const numericValue = typeof value === 'number' ? value : typeof value === 'string' && value.trim() ? Number(value) : Number.NaN
  if (!Number.isFinite(numericValue)) {
    return 'inherit'
  }
  return Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, numericValue))
}
