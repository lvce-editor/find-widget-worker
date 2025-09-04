import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getEventListeners = (uid: number, widgetId: number): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleInput,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleInput', 0, widgetId, 'event.target.value'],
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
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleReplaceInput', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleReplaceFocus,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleReplaceFocus', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleFocusPrevious,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusPrevious', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleFocusNext,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusNext', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickReplaceAll,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickReplaceAll', 0, widgetId],
    },
    {
      name: DomEventListenerFunctions.HandleClickButton,
      params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickButton', 0, widgetId, `event.target.name`],
    },
  ]
}
