import { all, fork } from "redux-saga/effects";
import {
  getDataSaga,
  getWahaSaga,
} from "./currentStates/structureState/StructureSaga";

function* rootSaga() {
  yield fork(getDataSaga);
  yield fork(getWahaSaga);
}

export default rootSaga;
