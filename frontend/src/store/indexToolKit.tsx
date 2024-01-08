import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import middlewares from "./index";

export default configureStore({
  reducer: rootReducer,
  //@ts-ignore
  middleware: [...middlewares],
});
