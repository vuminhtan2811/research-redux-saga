import {
  HIDE_MODAL,
  SHOW_MODAL,
  CHANGE_MODAL_TITLE,
  CHANGE_MODAL_CONTENT
} from "../types/modal.type"

const initialState = {
  showModal: false,
  title: "",
  component: null
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true }
    case HIDE_MODAL:
      return { ...state, showModal: false }
    case CHANGE_MODAL_TITLE:
      return { ...state, title: action.payload.title }
    case CHANGE_MODAL_CONTENT:
      return { ...state, component: action.payload.component }
    default:
      return { ...state }
  }
}

export default reducer
