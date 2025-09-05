import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'
import * as HandleFindWidgetFocus from '../src/parts/HandleFindWidgetFocus/HandleFindWidgetFocus.ts'

test('handleFindWidgetFocus - no change when same focus', () => {
	const state = { ...createDefaultState(), focus: 1 }
	const result = HandleFindWidgetFocus.handleFindWidgetFocus(state, 1)
	expect(result).toBe(state)
})

test('handleFindWidgetFocus - updates focus and source when different', () => {
	const state = { ...createDefaultState(), focus: 1 }
	const result = HandleFindWidgetFocus.handleFindWidgetFocus(state, 2)
	expect(result).not.toBe(state)
	expect(result.focus).toBe(2)
	expect(result.focusSource).toBe(FocusSource.User)
})
