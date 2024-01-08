import { put, takeLatest } from "redux-saga/effects";
import { apiPaths } from "src/constants/api/paths";

interface Response {
  json<T>(): Promise<T>;
}

import { GET_AUTH_REQUESTED, GET_AUTH_SUCCEED } from "./AuthToolkit";

export function* getAuth({ payload }) {
  try {
    console.log("payload", payload);
    const data: Response = yield fetch(`${apiPaths.usersBase}`);
    const res: any = yield data.json();
    console.log("res Auth", res);
    yield put(GET_AUTH_SUCCEED(res));
  } catch (error) {
    console.log("error");
  }
}

export function* getAuthSaga() {
  yield takeLatest(GET_AUTH_REQUESTED, getAuth);
}
