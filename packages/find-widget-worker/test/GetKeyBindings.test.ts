import { expect, test } from '@jest/globals'
import { KeyCode, KeyModifier, WhenExpression } from '@lvce-editor/constants'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings - returns an array of key bindings', () => {
  const result = GetKeyBindings.getKeyBindings()
  expect(result).toBeDefined()
})

test('getKeyBindings - Escape closes the find widget', () => {
  const result = GetKeyBindings.getKeyBindings()

  expect(result).toContainEqual({
    command: 'FindWidget.close',
    key: KeyCode.Escape,
    when: WhenExpression.FocusFindWidget,
  })
})

test('getKeyBindings - Enter focuses the next match from the find input', () => {
  const result = GetKeyBindings.getKeyBindings()

  expect(result).toContainEqual({
    command: 'FindWidget.focusNext',
    key: KeyCode.Enter,
    when: WhenExpression.FocusFindWidget,
  })
})

test('getKeyBindings - Shift+Enter focuses the previous match from the find input', () => {
  const result = GetKeyBindings.getKeyBindings()

  expect(result).toContainEqual({
    command: 'FindWidget.focusPrevious',
    key: KeyModifier.Shift | KeyCode.Enter,
    when: WhenExpression.FocusFindWidget,
  })
})

test('getKeyBindings - Enter replaces the current match from the replace input', () => {
  const result = GetKeyBindings.getKeyBindings()

  expect(result).toContainEqual({
    command: 'FindWidget.replace',
    key: KeyCode.Enter,
    when: WhenExpression.FocusFindWidgetReplace,
  })
})
