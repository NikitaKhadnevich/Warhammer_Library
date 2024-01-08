/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { rootInititalState } from "./rootInitialState";

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];
// const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === "development") {
//   // eslint-disable-next-line no-underscore-dangle
//   //@ts-ignore
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

//   if (typeof devToolsExtension === "function") {
//     //@ts-ignore
//     enhancers.push(devToolsExtension());
//   }
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middlewares),
//   ...enhancers
// );

const store = configureStore({
  reducer: rootReducer,
  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: rootInititalState,
});

//@ts-ignore
// const store = createStore(rootReducer, rootInititalState, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
