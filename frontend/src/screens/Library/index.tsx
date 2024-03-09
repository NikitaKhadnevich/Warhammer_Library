import React from "react";
import cn from "classnames";

import Article from "src/docStructure/Article";

import { LibraryContent } from "./components";
import "./_mainLibraryStyles.scss";

function Library(): React.Node {
  return (
    <Article>
      <div className={cn("mainLibraryPage")}>
        <p>Library</p>
        <LibraryContent />
      </div>
    </Article>
  );
}

export { Library };
