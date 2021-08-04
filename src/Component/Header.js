import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../Css/Header.css";

import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();

  const isLogin = localStorage.getItem("cud");

  const authorData = useSelector((state) => state.authorReducer);
  const courseData = useSelector((state) => state.courseReducer);

  return (
    <div className="header">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="navlink"
            activeClassName="active__navlink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            className="navlink"
            activeClassName="active__navlink"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/author"
            className="navlink"
            activeClassName="active__navlink"
          >
            Author ({authorData.length})
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/course"
            className="navlink"
            activeClassName="active__navlink"
          >
            Course ({courseData.length})
          </NavLink>
        </li>
      </ul>
      <div className="user">
        <p>{isLogin}</p>
        {isLogin === null ? (
          <button
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("cud");
              history.push("/login");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
