/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { IAuthInterface, IGET_LOGIN_SUCCEED } from "./@types";

export const authStore: IAuthInterface = {
  isAuth: null,
  isAuthLoading: null,
  user: {
    email: "",
    id: null,
  },
  errorMessage: null,
};

export interface Action<T> {
  type: string;
  payload: T;
}

export const authStoreSlice = createSlice({
  name: "auth-reducer",
  initialState: authStore,
  reducers: {
    GET_SIGNUP_REQUESTED: (state: IAuthInterface, action: Action<any>) => {
      const newState = { ...state };
      newState.isAuthLoading = true;
      newState.isAuth = false;
      newState.errorMessage = null;
      return newState;
    },
    GET_LOGIN_REQUESTED: (state: IAuthInterface, action: Action<any>) => {
      const newState = { ...state };
      newState.isAuthLoading = true;
      newState.isAuth = false;
      newState.errorMessage = null;
      return newState;
    },
    GET_LOGIN_SUCCEED: (
      state: IAuthInterface,
      action: Action<IGET_LOGIN_SUCCEED>
    ) => {
      const newState = { ...state, ...action.payload };
      newState.isAuthLoading = false;
      newState.errorMessage = null;
      newState.isAuth = true;
      return newState;
    },
    GET_AUTH_FAILED: (state: IAuthInterface, action: Action<string>) => {
      const newState = { ...state };
      newState.isAuthLoading = false;
      newState.errorMessage = action.payload;
      return newState;
    },
    GET_RELOAD_REQUESTED: (state: IAuthInterface, action: Action<any>) => {
      const newState = { ...state };
      newState.isAuthLoading = true;
      newState.isAuth = false;
      newState.errorMessage = null;
      return newState;
    },
    SET_LOGOUT: (state: IAuthInterface) => {
      const newState = { ...state };
      newState.errorMessage = null;
      newState.isAuth = false;
      newState.isAuthLoading = false;
      newState.user = {
        ...newState.user,
        email: null,
        id: null,
      };
      return newState;
    },
  },
});

export default authStoreSlice.reducer;
export const {
  GET_SIGNUP_REQUESTED,
  GET_LOGIN_REQUESTED,
  GET_RELOAD_REQUESTED,
  GET_LOGIN_SUCCEED,
  GET_AUTH_FAILED,
  SET_LOGOUT,
} = authStoreSlice.actions;
