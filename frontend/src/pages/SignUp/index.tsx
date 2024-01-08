import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import cn from "classnames";
import "./_signUpStyles.scss";
import { GET_AUTH_REQUESTED } from "src/store/currentStates/authState/AuthToolkit";
import { AuthIsAuth } from "src/store/currentStates/authState/AuthSelectors";
import { paths } from "src/constants/api/paths";

function SignUp() {
  const [form, setForm] = useState<object>({
    email: "",
    password: "",
  });
  const isAuth = useSelector(AuthIsAuth);
  const dispatches = useDispatch();
  const setDataToAuthStore = <T extends Record<string, string>>(
    formData: T
  ) => {
    dispatches(GET_AUTH_REQUESTED(formData));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(paths.library);
    }
  }, [isAuth]);

  return (
    <div className={cn("signUpWrapper")}>
      Register
      <form>
        <input
          type="text"
          required
          onChange={(e) => {
            console.log("email", e.target.value);
            setForm({ ...form, email: e.target.value });
          }}
        />
        <input
          type="password"
          required
          onChange={(e) => {
            console.log("password", e.target.value);
            setForm({ ...form, password: e.target.value });
          }}
        />
      </form>
      <button
        onClick={() => {
          setDataToAuthStore(form);
          console.log("form:", form);
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
