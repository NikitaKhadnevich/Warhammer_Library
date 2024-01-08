import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import "./_asideStyles.scss";
import { GET_AUTH_REQUESTED } from "src/store/currentStates/authState/AuthToolkit";

function Aside() {
  const [form, setForm] = useState<object>({
    name: "",
    password: "",
  });

  const dispatches = useDispatch();
  const setDataToAuthStore = <T extends Record<string, string>>(
    formData: T
  ) => {
    dispatches(GET_AUTH_REQUESTED(formData));
  };

  return (
    <aside className={cn("asideWrapper")}>
      Its Aside
      <form>
        <input
          type="text"
          onChange={(e) => {
            console.log("nick", e.target.value);
            setForm({ ...form, name: e.target.value });
          }}
        />
        <input
          type="password"
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
        send
      </button>
    </aside>
  );
}

export default Aside;
