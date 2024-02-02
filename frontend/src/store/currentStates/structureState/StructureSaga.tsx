import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { proxy, errorMes } from "../../components/Api/Api";
import { apiPaths } from "src/constants/api/paths";

import {
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
  REQUEST_BOOKS_LIBRARY,
  SET_BOOKS_LIBRARY,
  ERROR_REQUEST_BOOKS_LIBRARY,
} from "./StructureToolkit";

import { IDataStruInterface } from "./@types";

interface Response {
  json<T>(): Promise<T>;
}

export function* getData({ payload }) {
  try {
    const data: Response = yield fetch(`${apiPaths.testTodos}/${payload}`);
    const res: IDataStruInterface = yield data.json();
    console.log("getData:", res);
    yield put(GET_STRU_SUCCEED(res));
  } catch (error) {
    yield put(GET_STRU_FAILED(apiPaths.testTodos));
  }
}

export function* getWaha({ payload }) {
  try {
    const data: Response = yield fetch(`${apiPaths.wahaNotes}/${payload}`);
    const res: any = yield data.json();
    console.log("getWaha:", res);
  } catch {}
}

export function* getBooks({ payload }) {
  const token = localStorage.getItem("token");
  const dataFromToken = typeof token === "string" ? JSON.parse(token) : null;
  if (!dataFromToken) return;
  try {
    const messagesRequest = yield axios.get(`${apiPaths.authPath}/messages/`, {
      headers: {
        Authorization: `Bearer ${dataFromToken.accessToken}`,
      },
    });
    yield put(SET_BOOKS_LIBRARY(messagesRequest.data));
  } catch (error) {
    yield put(
      ERROR_REQUEST_BOOKS_LIBRARY(error.response.data || "Get Library Error :(")
    );
  }
}

export function* getDataSaga() {
  yield takeLatest(GET_STRU_REQUESTED, getData);
}

export function* getBooksSaga() {
  yield takeLatest(REQUEST_BOOKS_LIBRARY, getBooks);
}

export function* getWahaSaga() {
  // yield takeLatest(GET_STRU_REQUESTED, getWaha);
}
