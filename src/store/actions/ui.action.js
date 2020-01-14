import { HIDE_LOADING, SHOW_LOADING } from "../types/ui.type"

export function showGlobalLoading() {
  return {
    type: SHOW_LOADING
  }
}

export function hideGlobalLoading() {
  return {
    type: HIDE_LOADING
  }
}
