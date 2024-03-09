import React, { useEffect } from "react";
import cn from "classnames";

import Article from "src/docStructure/Article";

import "./_mainPersonaStyles.scss";
import { PersonaContent } from "./components";

function Persona() {
  return (
    <Article>
      <div className={cn("mainPersonaPage")}>
        <p>Persona Main</p>
        <PersonaContent />
      </div>
    </Article>
  );
}

export { Persona };
