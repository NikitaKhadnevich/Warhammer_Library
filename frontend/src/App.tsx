import React, { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useDispatch, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
import { queryClient } from "./api/queryApi/queryClient";

import "./constants/_appSize.scss";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import AppWrapper from "./AppWrapper";

import { Persona } from "./screens/Persona";
import { Library } from "./screens/Library";
import { Structure } from "./screens/Structure";

function App() {
  const isAuth = useSelector(AuthIsAuth);

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AppWrapper>
            <Routes>
              <Route
                path="/"
                element={!isAuth ? <Navigate to={paths.login} /> : <Library />}
              />
              <Route
                path="*"
                element={!isAuth ? <Navigate to={paths.login} /> : <Library />}
              />
              <Route path={paths.register} element={<SignUp />} />
              <Route path={paths.login} element={<SignIn />} />
              <Route path={paths.library} element={<Library />} />
              <Route path={paths.persona} element={<Persona />} />
              <Route path={paths.structure} element={<Structure />} />
            </Routes>
          </AppWrapper>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
