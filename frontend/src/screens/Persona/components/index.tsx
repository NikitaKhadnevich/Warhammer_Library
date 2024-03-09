import React from "react";
import cn from "classnames";
import "./_personaContentStyles.scss";
import { useSelector } from "react-redux";

import { apiPaths } from "src/constants/api/paths";

function PersonaContent(): React.Node {
  return <div className={cn("personaContentWrapper")}></div>;
}

export { PersonaContent };
