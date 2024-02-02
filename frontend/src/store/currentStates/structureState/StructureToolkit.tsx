/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { IDataStruInterface, IBooksLibrary, IStruInterfaceT } from "./@types";

export type IStruType = IStruInterfaceT<IDataStruInterface, IBooksLibrary>;

export const initialStruState: IStruType = {
  dataSTRU: [],
  url: "",
  isFetching: false,
  path: "",
  booksLibrary: [],
  errorMessage: null,
};

export interface Action<T> {
  type: string;
  payload: T;
}

export const structures = createSlice({
  name: "structure-reducer",
  initialState: initialStruState,
  reducers: {
    REQUEST_BOOKS_LIBRARY: (state: IStruType) => {
      const newState = { ...state };
      newState.isFetching = true;
      return newState;
    },
    ERROR_REQUEST_BOOKS_LIBRARY: (state: IStruType, action: Action<string>) => {
      const newState = { ...state };
      newState.isFetching = false;
      newState.errorMessage = action.payload;
      return newState;
    },
    SET_BOOKS_LIBRARY: (state: IStruType, action: Action<any>) => {
      const newState = { ...state };
      newState.isFetching = false;
      newState.booksLibrary = action.payload;
      return newState;
    },

    GET_STRU_REQUESTED: (state: IStruType, action: Action<string>) => {
      const newState = { ...state };
      newState.isFetching = true;
      newState.url = action.payload;
      return newState;
    },
    GET_STRU_SUCCEED: (
      state: IStruType,
      action: Action<IDataStruInterface>
    ) => {
      const newState = { ...state };
      newState.dataSTRU = [...newState?.dataSTRU, action.payload];
      newState.isFetching = false;
      newState.url = "";
      return newState;
    },
    GET_STRU_FAILED: (state: IStruType, action) => {
      const newState = { ...state };
      newState.isFetching = false;
      newState.url = "";
      return newState;
    },
    SET_CLEARED_DATA: (
      state: IStruType,
      action: Action<IDataStruInterface[]>
    ) => {
      const newState = { ...state };
      newState.dataSTRU = action.payload;
      return newState;
    },
  },
});

export default structures.reducer;
export const {
  REQUEST_BOOKS_LIBRARY,
  ERROR_REQUEST_BOOKS_LIBRARY,
  SET_BOOKS_LIBRARY,
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
  SET_CLEARED_DATA,
} = structures.actions;
