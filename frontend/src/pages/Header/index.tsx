import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import "./_headerStyles.scss";

import {
  GET_STRU_REQUESTED,
  GET_STRU_SUCCEED,
  GET_STRU_FAILED,
} from "src/store/currentStates/structureState/StructureToolkit";

import {
  StructureDataSTRU,
  StructureIsFetching,
} from "src/store/currentStates/structureState/StructureSelectors";

function Header() {
  const dispatches = useDispatch();
  const getDataId = useSelector(StructureDataSTRU);
  const isFetching = useSelector(StructureIsFetching);

  const getData = (currentStructure: string) => {
    dispatches(GET_STRU_REQUESTED(currentStructure));
  };

  const getClearData = (array) => {
    //@ts-ignore
    const idsObj = {};
    const data = array
      .map((item, index) => {
        if (idsObj[item.id] !== true) {
          idsObj[item.id] = true;
          return item;
        }
      })
      .filter((item) => !!item);
    console.log("data", data, idsObj);
  };

  return (
    <header
      className={cn("headerWrapper", {
        isFetching: isFetching,
      })}
    >
      Its Header
      <button
        onClick={() => {
          if (getDataId[0]) {
            return getData(getDataId.length + 1);
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
