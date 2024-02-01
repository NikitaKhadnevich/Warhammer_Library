import { put, takeLatest } from "redux-saga/effects";
import { apiPaths } from "src/constants/api/paths";
import { signUp } from "src/api/authApi";
import { IGET_AUTH_SUCCEED } from "src/store/currentStates/authState/@types";
import localForage from "localforage";

import {
  GET_AUTH_REQUESTED,
  GET_AUTH_SUCCEED,
  GET_AUTH_FAILED,
} from "./AuthToolkit";

export function* getSignUp({ payload }) {
  const res: IGET_AUTH_SUCCEED | string = yield signUp("register", payload);
  if (typeof res === "object") {
    localStorage.setItem(res.user.id.toString(), res.accessToken);
    yield put(GET_AUTH_SUCCEED(res));
  } else {
    yield put(GET_AUTH_FAILED(res));
  }
}

export function* getSignUpSaga() {
  yield takeLatest(GET_AUTH_REQUESTED, getSignUp);
}
