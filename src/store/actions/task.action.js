import {
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED,
  FILTER_TASK,
  FILTER_TASK_SUCCESS
} from "../types/task.type"

export const fetchListTask = () => {
  return { type: FETCH_TASK }
}

export const fetchListTaskSuccess = data => {
  return { type: FETCH_TASK_SUCCESS, payload: { data } }
}

export const fetchListTaskFailed = error => {
  return { type: FETCH_TASK_FAILED, payload: { error } }
}

export const filterTask = keyword => {
  return { type: FILTER_TASK, payload: { keyword } }
}

export const filterTaskSuccess = data => {
  return { type: FILTER_TASK_SUCCESS, payload: { data } }
}
