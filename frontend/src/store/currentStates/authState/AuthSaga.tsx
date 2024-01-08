import { put, takeLatest } from "redux-saga/effects";
import { apiPaths } from "src/constants/api/paths";
import { signUp } from "src/api/authApi";

interface Response {}

import { GET_AUTH_REQUESTED, GET_AUTH_SUCCEED } from "./AuthToolkit";

export function* getSignUp({ payload }) {
  console.log("payload getSignUp", payload);
  try {
    const res: any = yield signUp("register", payload);
    yield put(GET_AUTH_SUCCEED(res.accessToken));
  } catch (error) {
    console.log("error");
  }
}

export function* getSignUpSaga() {
  yield takeLatest(GET_AUTH_REQUESTED, getSignUp);
}
