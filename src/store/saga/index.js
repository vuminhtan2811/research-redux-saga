import { fork, takeLatest, takeEvery } from "redux-saga/effects"
import {
  watchFetchListTask,
  filterTaskAction,
  addTaskAction,
  deleteTaskAction,
  updateTaskAction
} from "./task.saga"
import {
  FILTER_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from "../types/task.type"

function* rootSaga() {
  yield fork(watchFetchListTask)
  yield takeLatest(FILTER_TASK, filterTaskAction)
  yield takeEvery(ADD_TASK, addTaskAction)
  yield takeEvery(DELETE_TASK, deleteTaskAction)
  yield takeEvery(UPDATE_TASK, updateTaskAction)
}

export default rootSaga
