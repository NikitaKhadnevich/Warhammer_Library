import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";
import { useNavigate } from "react-router-dom";

import "./_signInStyles.scss";
import { GET_LOGIN_REQUESTED } from "src/store/currentStates/authState/AuthToolkit";
import {
  AuthIsAuth,
  AuthIsWarnOrErrorMessage,
  AuthIsLoading,
} from "src/store/currentStates/authState/AuthSelectors";
import { paths } from "src/constants/api/paths";

function SignIn() {
  const [form, setForm] = useState<object>({
    email: "",
    password: "",
  });
  const isAuth = useSelector(AuthIsAuth);
  const navigate = useNavigate();
  const isWarnOrErrorMessage = useSelector(AuthIsWarnOrErrorMessage);

  const dispatches = useDispatch();
  const setDataToAuthStore = <T extends Record<string, string>>(
    formData: T
  ) => {
    dispatches(GET_LOGIN_REQUESTED(formData));
  };

  useEffect(() => {
    if (isAuth) {
      navigate(paths.library);
    }
  }, [isAuth]);

  return (
    <>
      {isWarnOrErrorMessage && (
        <div
          className={cn(
            "warnAndErrorMessage",
            isWarnOrErrorMessage.trim().slice(0, 10)
          )}
        >
          {isWarnOrErrorMessage}
        </div>
      )}
      <div className={cn("signinWrapper")}>
        <button
          onClick={() => {
            navigate(paths.register);
          }}
        >
          To Registration
        </button>
        Login
        <form>
          <input
            type="text"
            required
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <input
            type="password"
            required
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          />
        </form>
        <button
          onClick={() => {
            setDataToAuthStore(form);
            console.log("form Sign IN:", form);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default SignIn;
