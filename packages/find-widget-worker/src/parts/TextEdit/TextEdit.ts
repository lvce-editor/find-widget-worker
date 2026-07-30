export interface Change {
  readonly endOffset: number
  readonly inserted: string
  readonly origin: string
  readonly startOffset: number
}

export type TextEdit = Change
