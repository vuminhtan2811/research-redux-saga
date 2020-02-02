import {
  HIDE_MODAL,
  SHOW_MODAL,
  CHANGE_MODAL_TITLE,
  CHANGE_MODAL_CONTENT
} from "../types/modal.type"

export function showModal() {
  return {
    type: SHOW_MODAL
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export function changeModalTitle(title) {
  return {
    type: CHANGE_MODAL_TITLE,
    payload: {
      title
    }
  }
}

export function changeModalContent(component) {
  return {
    type: CHANGE_MODAL_CONTENT,
    payload: {
      component
    }
  }
}
