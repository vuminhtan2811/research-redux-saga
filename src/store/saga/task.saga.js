import { take, put, call, delay } from "redux-saga/effects"
import { FETCH_TASK } from "../types/task.type"
import { getTasks, addTasks, deleteTasks, updateTasks } from "../../apis/task"
import {
  fetchListTask,
  fetchListTaskSuccess,
  fetchListTaskFailed,
  addTaskSuccess,
  addTaskFailed,
  deleteTaskSuccess,
  deleteTaskFailed,
  updateTaskSuccess,
  updateTaskFailed
} from "../actions/task.action"
import { hideModal } from "../../store/actions/modal.action"
import { showGlobalLoading, hideGlobalLoading } from "../actions/ui.action"

export function* watchFetchListTask() {
  while (true) {
    const action = yield take(FETCH_TASK)
    yield put(showGlobalLoading())
    const { params } = action.payload
    const resp = yield call(getTasks, params)
    const { status, data } = resp
    if (status === 200) {
      yield put(fetchListTaskSuccess(data))
    } else {
      yield put(fetchListTaskFailed(data))
    }
    yield delay(500)
    yield put(hideGlobalLoading())
  }
}

export function* filterTaskAction({ payload }) {
  yield delay(1000)
  const { keyword } = payload
  yield put(fetchListTask({ q: keyword }))
}

export function* addTaskAction({ payload }) {
  yield put(showGlobalLoading())
  const resp = yield call(addTasks, payload.data)
  const { status, data } = resp
  if (status === 200 || status === 201) {
    yield put(addTaskSuccess(data))
  } else {
    yield put(addTaskFailed(data))
  }
  yield delay(500)
  yield put(hideModal())
  yield put(hideGlobalLoading())
}

export function* deleteTaskAction({ payload }) {
  const { id } = payload.data
  yield put(showGlobalLoading())
  const resp = yield call(deleteTasks, id)
  const { status, data } = resp
  if (status === 200 || status === 201) {
    yield put(deleteTaskSuccess(id))
  } else {
    yield put(deleteTaskFailed(data))
  }
  yield delay(500)
  yield put(hideModal())
  yield put(hideGlobalLoading())
}

export function* updateTaskAction({ payload }) {
  yield put(showGlobalLoading())
  const resp = yield call(updateTasks, payload.data)
  const { status, data } = resp
  if (status === 200 || status === 201) {
    yield put(updateTaskSuccess(data))
  } else {
    yield put(updateTaskFailed(data))
  }
  yield delay(500)
  yield put(hideModal())
  yield put(hideGlobalLoading())
}
