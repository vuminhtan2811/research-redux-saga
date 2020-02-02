import {
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED,
  FILTER_TASK,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
  SET_TASK_EDITING,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED
} from "../types/task.type"

import { showToast } from "../../helpers/toastify"

const initialState = {
  listTask: [],
  taskEditing: null
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

    case ADD_TASK:
      return { ...state }

    case ADD_TASK_SUCCESS:
      return { ...state, listTask: [payload.data].concat(state.listTask) }

    case ADD_TASK_FAILED:
      showToast("error", payload.error.message)
      return { ...state }

    case DELETE_TASK:
      return { ...state }

    case DELETE_TASK_SUCCESS:
      const { data } = payload
      const newListTask = state.listTask.filter(task => {
        return task.id !== data
      })
      return { ...state, listTask: [...newListTask] }

    case DELETE_TASK_FAILED:
      showToast("error", payload.error.message)
      return { ...state }

    case SET_TASK_EDITING:
      return { ...state, taskEditing: payload.data }

    case UPDATE_TASK:
      return { ...state }

    case UPDATE_TASK_SUCCESS:
      const { id } = payload.data
      const { listTask } = state
      const index = state.listTask.findIndex(task => task.id === id)
      console.log(index)
      if (index !== -1) {
        const newListTask = [
          ...listTask.slice(0, index),
          payload.data,
          ...listTask.slice(index + 1)
        ]
        return {
          ...state,
          listTask: [...newListTask]
        }
      }
      return {
        ...state
      }

    case UPDATE_TASK_FAILED:
      showToast("error", payload.error.message)
      return { ...state }

    default:
      return state
  }
}
