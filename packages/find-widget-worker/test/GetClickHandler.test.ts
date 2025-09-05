import { expect, test } from '@jest/globals'
import * as FindWidgetToggleMatchCase from '../src/parts/FindWidgetToggleMatchCase/FindWidgetToggleMatchCase.ts'
import * as FindWidgetToggleMatchWholeWord from '../src/parts/FindWidgetToggleMatchWholeWord/FindWidgetToggleMatchWholeWord.ts'
import * as FindWidgetTogglePreserveCase from '../src/parts/FindWidgetTogglePreserveCase/FindWidgetTogglePreserveCase.ts'
import * as FindWidgetToggleUseRegularExpression from '../src/parts/FindWidgetToggleUseRegularExpression/FindWidgetToggleUseRegularExpression.ts'
import * as GetClickHandler from '../src/parts/GetClickHandler/GetClickHandler.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as Replace from '../src/parts/Replace/Replace.ts'
import * as ReplaceAll from '../src/parts/ReplaceAll/ReplaceAll.ts'

test('getClickHandler - maps names to handlers', () => {
	expect(GetClickHandler.getClickHandler(InputName.MatchCase)).toBe(FindWidgetToggleMatchCase.toggleMatchCase)
	expect(GetClickHandler.getClickHandler(InputName.MatchWholeWord)).toBe(FindWidgetToggleMatchWholeWord.toggleMatchWholeWord)
	expect(GetClickHandler.getClickHandler(InputName.UseRegularExpression)).toBe(FindWidgetToggleUseRegularExpression.toggleUseRegularExpression)
	expect(GetClickHandler.getClickHandler(InputName.PreserveCase)).toBe(FindWidgetTogglePreserveCase.togglePreserveCase)
	expect(GetClickHandler.getClickHandler(InputName.Replace)).toBe(Replace.replace)
	expect(GetClickHandler.getClickHandler(InputName.ReplaceAll)).toBe(ReplaceAll.replaceAll)
})

test('getClickHandler - throws on unexpected click', () => {
	expect(() => GetClickHandler.getClickHandler('unknown')).toThrow(new Error('unexpected click'))
})
