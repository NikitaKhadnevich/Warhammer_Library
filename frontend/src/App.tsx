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

import { AuthIsAuth } from "./store/currentStates/authState/AuthSelectors";
import { paths } from "./constants/api/paths";

import "./constants/_appSize.scss";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const isAuth = useSelector(AuthIsAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <MainPage /> : <Navigate to={paths.login} />}
        />
        <Route
          path="*"
          element={isAuth ? <MainPage /> : <Navigate to={paths.login} />}
        />
        <Route
          path={paths.library}
          element={isAuth ? <MainPage /> : <Navigate to={paths.login} />}
        />
        <Route path={paths.library} element={<MainPage />} />
        <Route path={paths.login} element={<SignIn />} />
        <Route path={paths.register} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
