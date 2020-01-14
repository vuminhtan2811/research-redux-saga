import { fork, takeLatest } from "redux-saga/effects"
import { watchFetchListTask, filterTaskAction } from "./task.saga"
import { FILTER_TASK } from "../types/task.type"

function* rootSaga() {
  yield fork(watchFetchListTask)
  yield takeLatest(FILTER_TASK, filterTaskAction)
}

export default rootSaga
