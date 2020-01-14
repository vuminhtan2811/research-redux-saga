import { HIDE_LOADING, SHOW_LOADING } from "../types/ui.type"

const initialState = {
  showLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, showLoading: true }
    case HIDE_LOADING:
      return { ...state, showLoading: false }
    default:
      return { ...state }
  }
}

export default reducer
