import {
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED
} from "../types/task.type"

import { showToast } from "../../commons/toastify"

const initialState = {
  listTask: [],
  loading: false
}

export default (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case FETCH_TASK:
      return { ...state, loading: true, listTask: [] }

    case FETCH_TASK_SUCCESS:
      return { ...state, loading: false, listTask: payload.data }

    case FETCH_TASK_FAILED:
       showToast("error", payload.error.message)
      return { ...state, loading: false, listTask: [] }

    default:
      return state
  }
}
