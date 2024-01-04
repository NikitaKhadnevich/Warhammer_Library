import { all, fork } from "redux-saga/effects";
import {
  getDataSaga,
  getDataSaga2,
} from "./currentStates/structureState/StructureSaga";

function* rootSaga() {
  yield fork(getDataSaga);
}

export default rootSaga;
