import { test, expect } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetFindMatchCountClassName from '../src/parts/GetFindMatchCountClassName/GetFindMatchCountClassName.ts'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'

test('getFindMatchCountClassName - with value and zero matches', () => {
  const result = GetFindMatchCountClassName.getFindMatchCountClassName(0, true)
  expect(result).toBe(MergeClassNames.mergeClassNames(ClassNames.FindWidgetMatchCount, ClassNames.FindWidgetMatchCountEmpty))
})

test('getFindMatchCountClassName - with value and non-zero matches', () => {
  const result = GetFindMatchCountClassName.getFindMatchCountClassName(5, true)
  expect(result).toBe(ClassNames.FindWidgetMatchCount)
})

test('getFindMatchCountClassName - with empty value and zero matches', () => {
  const result = GetFindMatchCountClassName.getFindMatchCountClassName(0, false)
  expect(result).toBe(ClassNames.FindWidgetMatchCount)
})
