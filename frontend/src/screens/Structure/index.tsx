import React, { useEffect } from "react";
import cn from "classnames";

import Article from "src/docStructure/Article";
import { useSelector } from "react-redux";

import { StructureContent } from "./components";
import "./_mainStructureStyles.scss";

function Structure(): React.Node {
  return (
    <Article>
      <div className={cn("mainStructurePage")}>
        <p>Structure</p>
        <StructureContent />
      </div>
    </Article>
  );
}

export { Structure };
