import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const emptyMatches = MergeClassNames.mergeClassNames(ClassNames.FindWidgetMatchCount, ClassNames.FindWidgetMatchCountEmpty)

export const getFindMatchCountClassName = (matchCount: number, hasValue: boolean): string => {
  if (hasValue && matchCount === 0) {
    return emptyMatches
  }
  return ClassNames.FindWidgetMatchCount
}
