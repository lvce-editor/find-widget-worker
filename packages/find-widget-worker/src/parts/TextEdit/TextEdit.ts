export interface Range {
  readonly columnIndex: number
  readonly rowIndex: number
}

export interface Selection {
  readonly end: Range
  readonly start: Range
}

export interface Change {
  readonly endOffset: number
  readonly inserted: string
  readonly origin: string
  readonly startOffset: number
}

export type TextEdit = Change
