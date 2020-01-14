import {
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED,
  FILTER_TASK,
  FILTER_TASK_SUCCESS
} from "../types/task.type"

import { showToast } from "../../commons/toastify"

const initialState = {
  listTask: []
}

export default (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case FETCH_TASK:
      return { ...state, listTask: [] }

    case FETCH_TASK_SUCCESS:
      return { ...state, listTask: payload.data }

    case FETCH_TASK_FAILED:
      showToast("error", payload.error.message)
      return { ...state, listTask: [] }
    case FILTER_TASK:
      return { ...state }
    case FILTER_TASK_SUCCESS:
      return { ...state, listTask: action.payload }

    default:
      return state
  }
}
