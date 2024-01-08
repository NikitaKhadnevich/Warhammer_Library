import { all, fork } from "redux-saga/effects";
import {
  getDataSaga,
  getWahaSaga,
} from "./currentStates/structureState/StructureSaga";

import { getAuthSaga } from "./currentStates/authState/AuthSaga";

function* rootSaga() {
  yield fork(getDataSaga);
  yield fork(getWahaSaga);
  yield fork(getAuthSaga);
}

export default rootSaga;
