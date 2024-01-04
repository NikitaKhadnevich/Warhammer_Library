/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";

interface IDataStruInterface {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface IStruInterfaceT<T> {
  url: string;
  isFetching: boolean;
  path: string;
  testValue: string;
  dataSTRU: Array<T>;
}

export type IStruType = IStruInterfaceT<IDataStruInterface>;

export const initialStruState: IStruType = {
  dataSTRU: [],
  url: "",
  isFetching: false,
  path: "",
  testValue: "this is text value",
};

export const structures = createSlice({
  name: "structure-reducer",
  initialState: initialStruState,
  reducers: {
    GET_STRU_REQUESTED: (state, action) => {
      //@ts-ignore
      state, (state.url = action.payload), (state.isFetching = true);
    },
    GET_STRU_SUCCEED: (state, action) => {
      //@ts-ignore
      state,
        (state.dataSTRU = [...state?.dataSTRU, action.payload]),
        (state.isFetching = false),
        (state.url = "");
    },
    GET_STRU_FAILED: (state, action) => {
      //@ts-ignore
      state, (state.isFetching = false), (state.url = "");
    },
  },
});

export default structures.reducer;
export const { GET_STRU_REQUESTED, GET_STRU_SUCCEED, GET_STRU_FAILED } =
  structures.actions;
