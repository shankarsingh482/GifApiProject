import { put, takeEvery, all, call } from 'redux-saga/effects'

// Our worker Saga: will perform the async task
function* takeSearchInput(action) {
  yield put({ type: 'SEARCHING'})
}

// Our watcher Saga: spawn a new Async task on each SEARCH
function* watchSearchInput(action) {
  yield takeEvery('SEARCH', takeSearchInput)
}

function* clearSearchInput(action) {
	yield put({type: "CLEARING"})
}

function* watchClearSearchInput(action){
	yield takeEvery("CLEAR", clearSearchInput)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
  	watchSearchInput(),
  	watchClearSearchInput(),
  ])
}