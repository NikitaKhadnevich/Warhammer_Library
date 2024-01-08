import React from "react";
import cn from "classnames";
import "./_articleStyles.scss";
import { useSelector } from "react-redux";
import { StructureDataSTRU } from "src/store/currentStates/structureState/StructureSelectors";
import { IDataStruInterface } from "src/store/currentStates/structureState/@types";

function Article() {
  const myData: Array<IDataStruInterface> = useSelector(StructureDataSTRU);

  return (
    <article className={cn("articleWrapper")}>
      <p> Its Article</p>
      <div className={cn("articleWrapper")}>
        <ul>
          {myData.map((list) => {
            return <li key={list.id}>{list.title}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default Article;
