import React, { useEffect } from "react";
import cn from "classnames";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { AuthIsUser } from "src/store/currentStates/authState/AuthSelectors";

import Header from "../Header";
import Article from "../Article";
import Footer from "../Footer";
import Aside from "../Aside";

import "./_mainPageStyles.scss";

function MainPage() {
  return (
    <>
      <div className={cn("mainPage")}>
        <Header />
        <Article />
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
