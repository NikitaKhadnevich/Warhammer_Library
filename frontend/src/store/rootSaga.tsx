import { all, fork } from "redux-saga/effects";
import {
  getDataSaga,
  getWahaSaga,
  getBooksSaga,
  getWahaNotesSaga,
} from "./currentStates/structureState/StructureSaga";

import {
  getSignUpSaga,
  getSignInSaga,
  getReloadPageSaga,
} from "./currentStates/authState/AuthSaga";

function* rootSaga() {
  yield fork(getDataSaga);
  yield fork(getBooksSaga);
  yield fork(getWahaSaga);
  yield fork(getSignUpSaga);
  yield fork(getSignInSaga);
  yield fork(getReloadPageSaga);
  yield fork(getWahaNotesSaga);
}

export default rootSaga;
