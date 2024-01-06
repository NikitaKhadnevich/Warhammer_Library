import { put, takeLatest } from "redux-saga/effects";
// import { proxy, errorMes } from "../../components/Api/Api";

const proxy = "https://jsonplaceholder.typicode.com/todos"; // Для развертывании проекта на heroku

import {
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
} from "./StructureToolkit";

import { IDataStruInterface } from "./@types";

//localhost:3100/WAHA_NOTES

http: interface Response {
  json<T>(): Promise<T>;
}

export function* getData({ payload }) {
  try {
    const data: Response = yield fetch(`${proxy}/${payload}`);
    const res: IDataStruInterface = yield data.json();
    yield put(GET_STRU_SUCCEED(res));
  } catch (error) {
    yield put(GET_STRU_FAILED(proxy));
  }
}

export function* getWaha() {
  try {
    const data: Response = yield fetch("http://localhost:3100/WAHA_NOTES");
    const res: any = yield data.json();
    console.log("res:", res);
  } catch {}
}

export function* getDataSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getData);
}

export function* getWahaSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getWaha);
}
