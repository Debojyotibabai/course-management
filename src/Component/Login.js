import React, { useState } from "react";
import Header from "./Header";
import "../Css/Login.css";
import { useHistory } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const getInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    setInputValue({ email: "", password: "" });
    localStorage.setItem("cud", inputValue.email);
    history.push("/author");
  };

  return (
    <>
      <Header />
      <div className="login">
        <h1>Sign In</h1>
        <form onSubmit={login}>
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            name="email"
            value={inputValue.email}
            required
            onChange={getInputValue}
          />
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            name="password"
            value={inputValue.password}
            required
            onChange={getInputValue}
          />
          <button className="form__button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
