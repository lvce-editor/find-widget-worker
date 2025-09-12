export interface Range {
  readonly rowIndex: number
  readonly columnIndex: number
}

export interface Selection {
  readonly start: Range
  readonly end: Range
}

export interface Change {
  readonly startOffset: number
  readonly endOffset: number
  readonly origin: string
}

export type TextEdit = Change
