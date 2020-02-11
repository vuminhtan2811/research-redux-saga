import {
  HIDE_LOADING,
  SHOW_LOADING,
  HIDE_SIDEBAR,
  SHOW_SIDEBAR
} from "../types/ui.type"

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

export function showSidebarDrawer() {
  return {
    type: SHOW_SIDEBAR
  }
}

export function hideSidebarDrawer() {
  return {
    type: HIDE_SIDEBAR
  }
}
