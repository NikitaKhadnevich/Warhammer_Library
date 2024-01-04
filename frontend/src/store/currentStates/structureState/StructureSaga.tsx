import { put, takeLatest } from "redux-saga/effects";
// import { proxy, errorMes } from "../../components/Api/Api";

const proxy = "https://jsonplaceholder.typicode.com/todos"; // Для развертывании проекта на heroku

import {
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
} from "./StructureToolkit";

// export function* getSTRUSaga({ payload }) {
//   console.log("getSTRUSaga");
//   try {
//     const stru = yield fetch(`${proxy}/${payload}`, {
//       headers: { "X-Requested-With": "XMLHttpRequest" },
//     });
//     const res = yield stru.json();
//     yield put(GET_STRU_SUCCEED(res)); // Redux-toolkit
//   } catch (error) {
//     yield put(GET_STRU_FAILED(proxy)); // Redux-toolkit
//   }
// }

// export function* watchSTRUSaga() {
//   yield takeLatest(GET_STRU_REQUESTED, getSTRUSaga);
// }

export function* getData({ payload }) {
  try {
    const data = yield fetch(`${proxy}/${payload}`);
    const res = yield data.json();
    console.log("getDataSaga:", res);
    yield put(GET_STRU_SUCCEED(res));
  } catch (error) {
    yield put(GET_STRU_FAILED(proxy));
  }
}

export function* getData2({ payload }) {
  try {
    const data = yield fetch(`${proxy}/${payload}`);
    const res = yield data.json();
    console.log("getDataSaga2:", res);
    yield put(GET_STRU_SUCCEED(res));
  } catch (error) {
    yield put(GET_STRU_FAILED(proxy));
  }
}

export function* getDataSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getData);
}

export function* getDataSaga2() {
  yield takeLatest(GET_STRU_REQUESTED, getData2);
}
