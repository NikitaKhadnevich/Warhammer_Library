import { initialStruState } from "./currentStates/structureState/StructureToolkit";
import { authStore } from "./currentStates/authState/AuthToolkit";

export const rootInititalState = {
  structures: initialStruState,
  authStore: authStore,
};
