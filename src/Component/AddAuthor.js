import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import { useHistory } from "react-router-dom";

import { authorReducerActions } from "../redux/authorReducer";
import { useDispatch } from "react-redux";

import uniqid from "uniqid";

const AddAuthor = () => {
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const getInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const addAuthor = (e) => {
    e.preventDefault();
    dispatch(
      authorReducerActions.addAuthor({
        details: {
          id: `${uniqid()}`,
          name: `${inputValue.fname} ${inputValue.lname}`,
        },
      })
    );
    setInputValue({
      fname: "",
      lname: "",
    });
    history.push("/author");
  };

  return (
    <>
      <Header />
      <div className="add__author__course__main__section">
        <h1>Add Author</h1>
        <form onSubmit={addAuthor}>
          <input
            className="form__input"
            type="text"
            placeholder="First Name"
            required
            name="fname"
            value={inputValue.fname}
            onChange={getInputValue}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Last Name"
            required
            name="lname"
            value={inputValue.lname}
            onChange={getInputValue}
          />
          <button className="form__button" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddAuthor;
