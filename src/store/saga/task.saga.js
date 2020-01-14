import { take, put, call } from "redux-saga/effects"
import { FETCH_TASK } from "../types/task.type"
import { getTasks } from "../../apis/task"
import {
  fetchListTaskSuccess,
  fetchListTaskFailed
} from "../actions/task.action"

import { showGlobalLoading, hideGlobalLoading } from "../actions/ui.action"

export  function* watchFetchListTask() {
  yield take(FETCH_TASK)
  yield put(showGlobalLoading())
  const resp = yield call(getTasks)
  const { status, data } = resp
  if (status === 200) {
    yield put(fetchListTaskSuccess(data))
  } else {
    yield put(fetchListTaskFailed(data))
  }
  yield put(hideGlobalLoading())
}

export function* filterTaskAction(action){
  console.log(action)
}