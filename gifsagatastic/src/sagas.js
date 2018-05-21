import { put, takeEvery, all, call } from 'redux-saga/effects'

// Our worker Saga: will perform the async task
function* takeSearchInput(action) {
  yield put({ type: 'SEARCHING', payload: "searching" })
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

function* takeInput(event){
	console.log("Action: ")
	console.log(event)
	yield put({type: "INPUT", payload: event})
}

function* watchInput(action){
	yield takeEvery("INPUTCHANGE", takeInput)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
  	watchSearchInput(),
  	watchClearSearchInput(),
  	watchInput()
  ])
}