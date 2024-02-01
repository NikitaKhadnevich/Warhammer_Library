/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { IAuthInterface, IGET_AUTH_SUCCEED } from "./@types";

export const authStore: IAuthInterface = {
  isAuth: false,
  isAuthLoading: false,
  user: {
    email: "",
    id: null,
  },
  accessToken: "",
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
    GET_AUTH_REQUESTED: (state: IAuthInterface, action: Action<any>) => {
      const newState = { ...state };
      newState.isAuthLoading = true;
      newState.errorMessage = null;
      return newState;
    },
    GET_AUTH_SUCCEED: (
      state: IAuthInterface,
      action: Action<IGET_AUTH_SUCCEED>
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
    SET_LOGOUT: (state: IAuthInterface) => {
      const newState = { ...state };
      newState.errorMessage = null;
      newState.isAuth = false;
      newState.accessToken = null;
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
  GET_AUTH_REQUESTED,
  GET_AUTH_SUCCEED,
  GET_AUTH_FAILED,
  SET_LOGOUT,
} = authStoreSlice.actions;
