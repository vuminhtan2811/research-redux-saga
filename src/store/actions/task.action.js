import api from "../../services/api"
import { ENDPOINT } from "../../constants"

import {
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED
} from "../types/task.type"

const url = "/task"
export const fetchListTask = () => {
  return { type: FETCH_TASK }
}

export const fetchListTaskSuccess = data => {
  return { type: FETCH_TASK_SUCCESS, payload: { data } }
}

export const fetchListTaskFailed = error => {
  return { type: FETCH_TASK_FAILED, payload: { error } }
}

export const fetchListTaskRequest = () => dispatch => {
  const taskEndpoint = `${ENDPOINT}${url}`
  dispatch(fetchListTask())
  api
    .get(taskEndpoint)
    .then(response => dispatch(fetchListTaskSuccess(response.data)))
    .catch(error => dispatch(fetchListTaskFailed(error)))
}
