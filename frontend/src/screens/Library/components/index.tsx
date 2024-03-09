import React from "react";
import cn from "classnames";
import "./_libraryContentStyle.scss";
import { useSelector } from "react-redux";

import { apiPaths } from "src/constants/api/paths";

function LibraryContent() {
  return <div className={cn("libraryContentWrapper")}></div>;
}

export { LibraryContent };
