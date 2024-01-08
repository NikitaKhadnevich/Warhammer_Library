/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { IAuthInterface } from "./@types";

export const authStore: IAuthInterface = {
  isAuth: false,
  isAuthLoading: false,
  userInfo: {
    name: "",
    password: "",
  },
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
      newState.userInfo = action.payload;
      return newState;
    },
    GET_AUTH_SUCCEED: (state: IAuthInterface, action: Action<boolean>) => {
      const newState = { ...state };
      newState.isAuth = action.payload;
      newState.isAuthLoading = false;
      return newState;
    },
    GET_AUTH_FAILED: (state: IAuthInterface, action) => {
      const newState = { ...state };
      newState.isAuthLoading = false;
      return newState;
    },
  },
});

export default authStoreSlice.reducer;
export const { GET_AUTH_REQUESTED, GET_AUTH_SUCCEED, GET_AUTH_FAILED } =
  authStoreSlice.actions;
