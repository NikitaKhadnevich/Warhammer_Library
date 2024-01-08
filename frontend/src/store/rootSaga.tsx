import { all, fork } from "redux-saga/effects";
import {
  getDataSaga,
  getWahaSaga,
} from "./currentStates/structureState/StructureSaga";

import { getSignUpSaga } from "./currentStates/authState/AuthSaga";

function* rootSaga() {
  yield fork(getDataSaga);
  yield fork(getWahaSaga);
  yield fork(getSignUpSaga);
}

export default rootSaga;
