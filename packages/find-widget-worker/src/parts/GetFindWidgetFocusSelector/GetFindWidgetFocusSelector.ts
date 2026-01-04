import * as FocusKey from '../FocusKey/FocusKey.ts'
import * as GetNameSelector from '../GetNameSelector/GetNameSelector.ts'
import * as Names from '../InputName/InputName.ts'

// TODO always focus element by name
export const getFindWidgetFocusSelector = (focus: number): string => {
  switch (focus) {
    case FocusKey.FindWidget: {
      return GetNameSelector.getNameSelector(Names.SearchValue)
    }
    case FocusKey.FocusFindWidgetCloseButton: {
      return GetNameSelector.getNameSelector(Names.Close)
    }
    case FocusKey.FocusFindWidgetNextMatchButton: {
      return GetNameSelector.getNameSelector(Names.FocusNext)
    }
    case FocusKey.FocusFindWidgetPreviousMatchButton: {
      return GetNameSelector.getNameSelector(Names.FocusPrevious)
    }
    case FocusKey.FocusFindWidgetReplace: {
      return GetNameSelector.getNameSelector(Names.ReplaceValue)
    }
    case FocusKey.FocusFindWidgetReplaceAllButton: {
      return GetNameSelector.getNameSelector(Names.ReplaceAll)
    }
    case FocusKey.FocusFindWidgetReplaceButton: {
      return GetNameSelector.getNameSelector(Names.Replace)
    }
    case FocusKey.FocusFindWidgetToggleReplace: {
      return GetNameSelector.getNameSelector(Names.ToggleReplace)
    }
    default: {
      return ''
    }
  }
}
