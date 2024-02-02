import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  AuthIsAuth,
  AuthIsLoading,
} from "./store/currentStates/authState/AuthSelectors";
import { paths } from "./constants/api/paths";

import "./constants/_appSize.scss";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AppWrapper from "./AppWrapper";

function App() {
  const isAuth = useSelector(AuthIsAuth);

  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route
            path="/"
            element={!isAuth ? <Navigate to={paths.login} /> : <MainPage />}
          />
          <Route
            path="*"
            element={!isAuth ? <Navigate to={paths.login} /> : <MainPage />}
          />
          <Route path="/" element={<MainPage />} />
          <Route path={paths.register} element={<SignUp />} />
          <Route path={paths.login} element={<SignIn />} />
          <Route path={paths.library} element={<MainPage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
