import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import cn from "classnames";

import {
  AuthIsAuth,
  AuthIsLoading,
} from "./store/currentStates/authState/AuthSelectors";

import { paths, apiPaths } from "./constants/api/paths";
import {
  GET_LOGIN_REQUESTED,
  GET_RELOAD_REQUESTED,
  GET_LOGIN_SUCCEED,
  GET_AUTH_FAILED,
  SET_LOGOUT,
} from "./store/currentStates/authState/AuthToolkit";
import "./_appWrapper.scss";

import {
  REQUEST_BOOKS_LIBRARY,
  REQUEST_NOTES_LIBRARY,
} from "./store/currentStates/structureState/StructureToolkit";
import Header from "./docStructure/Header";
import Footer from "./docStructure/Footer";

function AppWrapper({ children }: React.Node) {
  const isAuth = useSelector(AuthIsAuth);
  const isAuthLoading = useSelector(AuthIsLoading);
  const dispatches = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const token = localStorage.getItem("token");
  const dataFromToken = typeof token === "string" ? JSON.parse(token) : null;
  const isPrivatePaths = paths.login || paths.register || paths.logout;
  //Состояния:
  //1. Не авторизован и не делается запрос
  //2. Не авторизован и делается запрос
  //3. Авторизован
  //4. Ошибка в авторизации

  const isReloadState = isAuth === null && isAuthLoading === null;
  const noAuth = isAuth === false;
  const isFetching = isAuthLoading === true;

  const getBooksRequest = () => {
    dispatches(REQUEST_BOOKS_LIBRARY());
    dispatches(REQUEST_NOTES_LIBRARY());
  };

  useEffect(() => {
    const getUser = () => {
      if (!dataFromToken) {
        dispatches(SET_LOGOUT());
        navigate(paths.login);
        return;
      }
      dispatches(GET_RELOAD_REQUESTED(dataFromToken));
    };
    getUser();
  }, []);

  useEffect(() => {
    if (isAuth && dataFromToken) {
      getBooksRequest();
    }
    if (!isReloadState && !isFetching && (noAuth || !dataFromToken)) {
      console.log("NO Token");
      navigate(paths.login);
      dispatches(SET_LOGOUT());
    }
  }, [isAuth, dataFromToken]);

  console.log(location.slice(1), "isPrivatePaths:", isPrivatePaths);

  if (isReloadState && location !== paths[location.slice(1)]) {
    return (
      <div
        style={{
          fontSize: "55px",
        }}
      >
        LOADING
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className={cn("appWrapper")}>{children}</main>;
      <Footer />
    </>
  );
}

export default AppWrapper;
