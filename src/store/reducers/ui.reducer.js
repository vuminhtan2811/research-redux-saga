import {
  HIDE_LOADING,
  SHOW_LOADING,
  HIDE_SIDEBAR,
  SHOW_SIDEBAR
} from "../types/ui.type"

const initialState = {
  showLoading: false,
  showSidebar: true
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, showLoading: true }
    case HIDE_LOADING:
      return { ...state, showLoading: false }
    case HIDE_SIDEBAR:
      return { ...state, showSidebar: false }
    case SHOW_SIDEBAR:
      return { ...state, showSidebar: true }
    default:
      return { ...state }
  }
}

export default reducer
