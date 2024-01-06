/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { IDataStruInterface, IStruInterfaceT } from "./@types";

export type IStruType = IStruInterfaceT<IDataStruInterface>;

export const initialStruState: IStruType = {
  dataSTRU: [],
  url: "",
  isFetching: false,
  path: "",
  testValue: "this is text value",
};

export interface Action<T> {
  type: string;
  payload: T;
}

export const structures = createSlice({
  name: "structure-reducer",
  initialState: initialStruState,
  reducers: {
    GET_STRU_REQUESTED: (state: IStruType, action: Action<string>) => {
      //@ts-ignore
      state, (state.url = action.payload), (state.isFetching = true);
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
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
  SET_CLEARED_DATA,
} = structures.actions;
