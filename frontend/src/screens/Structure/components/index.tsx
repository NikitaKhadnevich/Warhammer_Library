import React from "react";
import cn from "classnames";
import "./_structureContentStyle.scss";
import { useSelector } from "react-redux";
import { StructureDataSTRU } from "src/store/currentStates/structureState/StructureSelectors";
import { IDataStruInterface } from "src/store/currentStates/structureState/@types";
import { apiPaths } from "src/constants/api/paths";

function StructureContent() {
  const myData: Array<IDataStruInterface> = useSelector(StructureDataSTRU);

  return (
    <div className={cn("structureContentWrapper")}>
      <img
        style={{ height: "20dvh", objectFit: "cover" }}
        src={`${apiPaths.bookAvatars}/2.jpeg`}
        alt="data"
      />
      <ul>
        {myData.map((list) => {
          return <li key={list.id}>{list.title}</li>;
        })}
      </ul>
    </div>
  );
}

export { StructureContent };
