import { put, takeLatest } from "redux-saga/effects";
// import { proxy, errorMes } from "../../components/Api/Api";
import { apiPaths } from "src/constants/api/paths";

import {
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
} from "./StructureToolkit";

import { IDataStruInterface } from "./@types";

interface Response {
  json<T>(): Promise<T>;
}

export function* getData({ payload }) {
  try {
    const data: Response = yield fetch(`${apiPaths.testTodos}/${payload}`);
    const res: IDataStruInterface = yield data.json();
    console.log("res:", res);
    yield put(GET_STRU_SUCCEED(res));
  } catch (error) {
    yield put(GET_STRU_FAILED(apiPaths.testTodos));
  }
}

export function* getWaha({ payload }) {
  try {
    const data: Response = yield fetch(`${apiPaths.wahaNotes}/${payload}`);
    const res: any = yield data.json();
    console.log("res:", res);
  } catch {}
}

export function* getDataSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getData);
}

export function* getWahaSaga() {
  // yield takeLatest(GET_STRU_REQUESTED, getWaha);
}
