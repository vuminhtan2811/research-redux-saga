import { ENDPOINT } from "../constants"
import api from "../services/api"

const url = "task"
export const getTasks = () => {
  return api.get(`${ENDPOINT}/${url}`)
}
