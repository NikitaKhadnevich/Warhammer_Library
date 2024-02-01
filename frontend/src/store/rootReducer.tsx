import { combineReducers } from "redux";

import structures from "./currentStates/structureState/StructureToolkit";
import authStore from "./currentStates/authState/AuthToolkit";

export default combineReducers({ structures, authStore });
