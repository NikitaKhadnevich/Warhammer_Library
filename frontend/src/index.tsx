import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { debugContextDevtool } from "react-context-devtool";
import App from "./App";
import "./resetStyles.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  //@ts-ignore
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
