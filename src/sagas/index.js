import { put, takeEvery, all, call, select } from "redux-saga/effects";
import getGiphy from "../api/index";

import {
  SEARCHING ,
  CLEARING ,
  RECEIVEDATA,
  SEARCH,
  CLEAR
} from '../constants'

// Our worker Saga: will perform the async task
function* takeSearchInput(action) {
  let searchValue = yield select(state => state.menuReducer.input);
  yield put({ type: SEARCHING });
  let json = yield call(getGiphy, searchValue);
  yield put({ type:  RECEIVEDATA, results: json.data.data });
}

// Our watcher Saga: spawn a new Async task on each SEARCH
function* watchSearchInput(action) {
  yield takeEvery(SEARCH, takeSearchInput);
}

function* clearSearchInput(action) {
  yield put({ type: CLEARING });
}

function* watchClearSearchInput(action) {
  yield takeEvery(CLEAR, clearSearchInput);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchSearchInput(), watchClearSearchInput()]);
}
