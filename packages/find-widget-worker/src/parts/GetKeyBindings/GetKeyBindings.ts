import { KeyCode } from '@lvce-editor/constants'
import { KeyModifier } from '@lvce-editor/constants'
import { WhenExpression } from '@lvce-editor/constants'

export const getKeyBindings = (): readonly any[] => {
  return [
    {
      key: KeyCode.Enter,
      command: 'FindWidget.focusNext',
      when: WhenExpression.FocusFindWidget,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyF,
      command: 'FindWidget.preventDefaultBrowserFind',
      when: WhenExpression.FocusFindWidget,
    },
    {
      key: KeyModifier.Shift | KeyCode.F4,
      command: 'FindWidget.focusPrevious',
      when: WhenExpression.FocusFindWidget,
    },
    {
      key: KeyCode.F4,
      command: 'FindWidget.focusNext',
      when: WhenExpression.FocusFindWidget,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusToggleReplace',
      when: WhenExpression.FocusFindWidget,
    },
    {
      key: KeyCode.Tab,
      command: 'FindWidget.focusReplace',
      when: WhenExpression.FocusFindWidget,
    },
    {
      key: KeyCode.Tab,
      command: 'FindWidget.focusPreviousMatchButton',
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      key: KeyModifier.Alt | KeyModifier.CtrlCmd | KeyCode.Enter,
      command: 'FindWidget.replaceAll',
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      key: KeyCode.Tab,
      command: 'FindWidget.focusNextMatchButton',
      when: WhenExpression.FocusFindWidgetPreviousMatchButton,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusReplace',
      when: WhenExpression.FocusFindWidgetPreviousMatchButton,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusPreviousMatchButton',
      when: WhenExpression.FocusFindWidgetNextMatchButton,
    },
    {
      key: KeyCode.Tab,
      command: 'FindWidget.focusCloseButton',
      when: WhenExpression.FocusFindWidgetNextMatchButton,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusNextMatchButton',
      when: WhenExpression.FocusFindWidgetCloseButton,
    },
    {
      key: KeyCode.Tab,
      command: 'FindWidget.focusReplaceButton',
      when: WhenExpression.FocusFindWidgetCloseButton,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusFind',
      when: WhenExpression.FocusFindWidgetReplace,
    },
    {
      key: KeyCode.Tab,
      command: 'FindWidget.focusReplaceAllButton',
      when: WhenExpression.FocusFindWidgetReplaceButton,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusCloseButton',
      when: WhenExpression.FocusFindWidgetReplaceButton,
    },
    {
      key: KeyModifier.Shift | KeyCode.Tab,
      command: 'FindWidget.focusReplaceButton',
      when: WhenExpression.FocusFindWidgetReplaceAllButton,
    },
  ]
}
