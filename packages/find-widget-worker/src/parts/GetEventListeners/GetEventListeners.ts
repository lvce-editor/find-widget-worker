import { EventExpression, WhenExpression } from '@lvce-editor/constants'
import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (uid: number, widgetId: number): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleInput', 0, widgetId, EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleClickClose,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickClose', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickPreviousMatch,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.focusPrevious', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickNextMatch,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.focusNext', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickReplace,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickReplace', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickReplace,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickReplaceAll', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickToggleReplace,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.toggleReplace', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleBlur,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleBlur', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleReplaceInput,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleReplaceInput', 0, widgetId, EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleReplaceFocus,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleReplaceFocus', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleFocusPrevious,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusFindWidgetPreviousMatchButton],
    },
    {
      name: DomEventListenerFunctions.HandleFocusNext,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusFindWidgetNextMatchButton],
    },
    {
      name: DomEventListenerFunctions.HandleToggleReplaceFocus,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleToggleReplaceFocus', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickReplaceAll,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickReplaceAll', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickButton,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickButton', 0, widgetId, EventExpression.TargetName],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerDown,
      params: [
        'executeWidgetCommand',
        'FindWidget',
        'FindWidget.handleResizerPointerDown',
        0,
        widgetId,
        EventExpression.ClientX,
        EventExpression.ClientY,
      ],
      trackPointerEvents: [DomEventListenerFunctions.HandleResizerPointerMove, DomEventListenerFunctions.HandleResizerPointerUp],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerMove,
      params: [
        'executeWidgetCommand',
        'FindWidget',
        'FindWidget.handleResizerPointerMove',
        0,
        widgetId,
        EventExpression.ClientX,
        EventExpression.ClientY,
      ],
    },
    {
      name: DomEventListenerFunctions.HandleResizerPointerUp,
      params: [
        'executeWidgetCommand',
        'FindWidget',
        'FindWidget.handleResizerPointerUp',
        0,
        widgetId,
        EventExpression.ClientX,
        EventExpression.ClientY,
      ],
    },
    {
      name: DomEventListenerFunctions.HandleFocusClose,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusFindWidgetCloseButton],
    },
    {
      name: DomEventListenerFunctions.HandleFocusMatchCase,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusSearchMatchCase],
    },
    {
      name: DomEventListenerFunctions.HandleFocusMatchWholeWord,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusSearchWholeWord],
    },
    {
      name: DomEventListenerFunctions.HandleFocusPreserveCase,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusSearchPreserveCase],
    },
    {
      name: DomEventListenerFunctions.HandleFocusReplace,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusFindWidgetReplaceButton],
    },
    {
      name: DomEventListenerFunctions.HandleFocusReplaceAll,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusFindWidgetReplaceAllButton],
    },
    {
      name: DomEventListenerFunctions.HandleFocusUseRegularExpression,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusSearchRegex],
    },
  ]
}
