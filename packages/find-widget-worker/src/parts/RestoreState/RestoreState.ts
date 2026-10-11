import type { RestoredState } from '../RestoredState/RestoredState.ts'

export const restoreState = (savedState: any): RestoredState => {
  return {
    hasValue: typeof savedState?.value === 'string',
    matchCase: savedState?.matchCase === true,
    matchWholeWord: savedState?.matchWholeWord === true,
    preserveCase: savedState?.preserveCase === true,
    replaceExpanded: savedState?.replaceExpanded === true,
    replacement: typeof savedState?.replacement === 'string' ? savedState.replacement : '',
    useRegularExpression: savedState?.useRegularExpression === true,
    value: typeof savedState?.value === 'string' ? savedState.value : '',
    width: typeof savedState?.width === 'number' ? savedState.width : undefined,
  }
}
