import { ENDPOINT } from "../constants"
import api from "../services/api"
import queryString from "query-string"

const url = "task"

export const getTasks = (param = {}) => {
  let query = ""
  if (Object.entries(param).length > 0) {
    query = `?${queryString.stringify(param)}`
  }
  return api.get(`${ENDPOINT}/${url}${query}`)
}

export const addTasks = data => {
  return api.post(`${ENDPOINT}/${url}`, data)
}

export const deleteTasks = id => {
  return api.delete(`${ENDPOINT}/${url}/${id}`)
}

export const updateTasks = data => {
  return api.put(`${ENDPOINT}/${url}/${data.id}`, data)
}
