import React from "react";
import cn from "classnames";
import "./_articleStyles.scss";
import { useSelector } from "react-redux";
import { StructureDataSTRU } from "src/store/currentStates/structureState/StructureSelectors";
import { IDataStruInterface } from "src/store/currentStates/structureState/@types";
import { apiPaths } from "src/constants/api/paths";

function Article({ children }: React.Node) {
  return (
    <article className={cn("articleWrapper")}>
      <p>Article Wrapper</p>
      {children}
    </article>
  );
}

export default Article;
