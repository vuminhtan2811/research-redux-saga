import {
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED,
  FILTER_TASK,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
  SET_TASK_EDITING
} from "../types/task.type"

export const fetchListTask = params => {
  return { type: FETCH_TASK, payload: { params } }
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

export const addTask = data => {
  return { type: ADD_TASK, payload: { data } }
}

export const addTaskSuccess = data => {
  return { type: ADD_TASK_SUCCESS, payload: { data } }
}

export const addTaskFailed = error => {
  return { type: ADD_TASK_FAILED, payload: { error } }
}

export const setTaskEditing = data => {
  return { type: SET_TASK_EDITING, payload: { data } }
}

export const updateTask = data => {
  return { type: UPDATE_TASK, payload: { data } }
}

export const updateTaskSuccess = data => {
  return { type: UPDATE_TASK_SUCCESS, payload: { data } }
}

export const updateTaskFailed = error => {
  return { type: UPDATE_TASK_FAILED, payload: { error } }
}

export const deleteTask = data => {
  return { type: DELETE_TASK, payload: { data } }
}

export const deleteTaskSuccess = data => {
  return { type: DELETE_TASK_SUCCESS, payload: { data } }
}

export const deleteTaskFailed = error => {
  return { type: DELETE_TASK_FAILED, payload: { error } }
}
