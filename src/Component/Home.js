import React from "react";
import Header from "./Header";
import "../Css/Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="home">
        <h1>Courses Administration</h1>
        <p>
          React, Redux and React Router in ES6 for ultra responsive Web Apps.
        </p>
        <button
          onClick={() => {
            history.push("/about");
          }}
        >
          Learn more
        </button>
      </div>
    </>
  );
};

export default Home;
