import { put, takeLatest } from "redux-saga/effects";

import { signIn, signUp, signReload } from "src/api/authApi";
import {
  IGET_LOGIN_SUCCEED,
  EReserveErrorMessages,
} from "src/store/currentStates/authState/@types";

import {
  GET_SIGNUP_REQUESTED,
  GET_LOGIN_REQUESTED,
  GET_RELOAD_REQUESTED,
  GET_LOGIN_SUCCEED,
  GET_AUTH_FAILED,
} from "./AuthToolkit";

export function* getSignUp({ payload }) {
  const res: IGET_LOGIN_SUCCEED | string = yield signUp("register", payload);
  if (typeof res === "object") {
    localStorage.setItem("token", JSON.stringify(res));
    yield put(GET_LOGIN_SUCCEED(res));
  } else {
    yield put(GET_AUTH_FAILED(res || EReserveErrorMessages.signUpError));
  }
}

export function* getSignIn({ payload }) {
  const res: IGET_LOGIN_SUCCEED | string = yield signIn("login", payload);
  if (typeof res === "object") {
    localStorage.setItem("token", JSON.stringify(res));
    const userObj = {
      user: {
        email: res.user.email,
        id: res.user.id,
      },
    };
    yield put(GET_LOGIN_SUCCEED(userObj));
  } else {
    yield put(GET_AUTH_FAILED(res || EReserveErrorMessages.signInError));
  }
}

export function* getReloadPage({ payload }) {
  const request:
    | {
        email: string;
        id: number;
      }
    | string = yield signReload(payload.user.id, payload.accessToken);
  if (typeof request === "object") {
    yield put(
      GET_LOGIN_SUCCEED({
        user: {
          email: request.email,
          id: request.id,
        },
      })
    );
  } else {
    yield put(GET_AUTH_FAILED(request || EReserveErrorMessages.reloadError));
  }
}

export function* getSignUpSaga() {
  yield takeLatest(GET_SIGNUP_REQUESTED, getSignUp);
}

export function* getSignInSaga() {
  yield takeLatest(GET_LOGIN_REQUESTED, getSignIn);
}

export function* getReloadPageSaga() {
  yield takeLatest(GET_RELOAD_REQUESTED, getReloadPage);
}
