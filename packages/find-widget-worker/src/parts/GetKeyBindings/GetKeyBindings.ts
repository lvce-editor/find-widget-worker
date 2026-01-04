import { KeyCode } from '@lvce-editor/constants'
import { KeyModifier } from '@lvce-editor/constants'
import { WhenExpression } from '@lvce-editor/constants'

export const getKeyBindings = (): readonly any[] => {
  return [
    {
      command: 'FindWidget.focusNext',
      key: KeyCode.Enter,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.preventDefaultBrowserFind',
      key: KeyModifier.CtrlCmd | KeyCode.KeyF,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusPrevious',
      key: KeyModifier.Shift | KeyCode.F4,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusNext',
      key: KeyCode.F4,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusToggleReplace',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusReplace',
      key: KeyCode.Tab,
      when: WhenExpression.FocusFindWidget,
    },
    {
      command: 'FindWidget.focusPreviousMatchButton',
      key: KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      command: 'FindWidget.replaceAll',
      key: KeyModifier.Alt | KeyModifier.CtrlCmd | KeyCode.Enter,
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      command: 'FindWidget.focusNextMatchButton',
      key: KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetPreviousMatchButton,
    },
    {
      command: 'FindWidget.focusReplace',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetPreviousMatchButton,
    },
    {
      command: 'FindWidget.focusPreviousMatchButton',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetNextMatchButton,
    },
    {
      command: 'FindWidget.focusCloseButton',
      key: KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetNextMatchButton,
    },
    {
      command: 'FindWidget.focusNextMatchButton',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetCloseButton,
    },
    {
      command: 'FindWidget.focusReplaceButton',
      key: KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetCloseButton,
    },
    {
      command: 'FindWidget.focusFind',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      command: 'FindWidget.focusReplaceAllButton',
      key: KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetReplaceButton,
    },
    {
      command: 'FindWidget.focusCloseButton',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetReplaceButton,
    },
    {
      command: 'FindWidget.focusReplaceButton',
      key: KeyModifier.Shift | KeyCode.Tab,
      when: WhenExpression.FocusFindWidgetReplaceAllButton,
    },
  ]
}
