import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import "./_headerStyles.scss";
import { paths } from "src/constants/api/paths";

import {
  GET_STRU_REQUESTED,
  SET_CLEARED_DATA,
} from "src/store/currentStates/structureState/StructureToolkit";

import { IDataStruInterface } from "src/store/currentStates/structureState/@types";

import {
  StructureDataSTRU,
  StructureIsFetching,
} from "src/store/currentStates/structureState/StructureSelectors";

import { AuthIsUser } from "src/store/currentStates/authState/AuthSelectors";
import { SET_LOGOUT } from "src/store/currentStates/authState/AuthToolkit";

function Header() {
  const dispatches = useDispatch();
  const getDataId = useSelector(StructureDataSTRU);
  const isFetching = useSelector(StructureIsFetching);
  const userInfo = useSelector(AuthIsUser);

  const navigate = useNavigate();

  const getData = <T extends string>(currentStructure: T) => {
    dispatches(GET_STRU_REQUESTED(currentStructure));
  };
  const setLogout = <T extends string | undefined>(id: T) => {
    if (id) {
      dispatches(SET_LOGOUT());
      localStorage.removeItem(id.toString());
    }
  };
  const getClearData = <T extends IDataStruInterface>(array: T[]) => {
    if (!array) return;
    const idsObj = {};
    const data = array
      .map((item) => {
        if (idsObj[item.id] !== true) {
          idsObj[item.id] = true;
          return item;
        }
      })
      .filter((item) => !!item);
    if (data) {
      const dataDefined = data as T[];
      return dispatches(SET_CLEARED_DATA(dataDefined));
    }
  };

  return (
    <header
      className={cn("headerWrapper", {
        isFetching: isFetching,
      })}
    >
      Its Header
      <button
        onClick={() => setLogout(userInfo.id)}
        disable={!!isFetching ? true : false}
      >
        Log Out
      </button>
      <button
        onClick={() => {
          if (getDataId[0]) {
            return getData((getDataId.length + 1).toString());
          }
          getData("1");
        }}
        disable={!!isFetching ? true : false}
      >
        {!!isFetching ? "Fetching" : "Get Next"}
      </button>
      <button
        onClick={() => {
          if (getDataId.length > 5) {
            getClearData(getDataId);
          }
        }}
        disable={!!isFetching ? true : false}
      >
        {!!isFetching ? "Fetching" : "GetData"}
      </button>
    </header>
  );
}

export default Header;
