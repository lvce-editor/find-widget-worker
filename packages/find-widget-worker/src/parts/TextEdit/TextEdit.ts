export interface Range {
  readonly rowIndex: number
  readonly columnIndex: number
}

export interface Selection {
  readonly start: Range
  readonly end: Range
}

export interface Change {
  readonly endOffset: number
  readonly inserted: string
  readonly origin: string
  readonly startOffset: number
}

export type TextEdit = Change
