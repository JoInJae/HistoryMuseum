import React, { useState } from "react";

import styles from "../pages/scss/login.module.scss";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    id: "",
    password: "",
  });

  const { id, password } = input;

  const onChange = (e) => {
    setInput({
      id: e.target.name === "id" ? e.target.value : id,
      password: e.target.name === "password" ? e.target.value : password,
    });
  };

  const send_user_info = () => {
    const option = {
      url: "/user/login",
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        id: id,
        password: password,
      },
    };
    axios(option)
      .then((response) => window.location.href="/qwer")
      .catch((error) => console.log(error.response));
  };

  return (
    <div className={styles.login_wrap}>
      <div className={styles.header}></div>
      <div className={styles.content}>
        <div className={[styles.input_form].join(" ")}>
          <input
            type={"text"}
            name={"id"}
            value={id}
            onChange={onChange}
            placeholder={"아이디"}
          />
        </div>
        <div className={styles.input_form}>
          <input
            type={"password"}
            name={"password"}
            value={password}
            onChange={onChange}
            placeholder={"비밀번호"}
          />
        </div>
        <button onClick={send_user_info}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
