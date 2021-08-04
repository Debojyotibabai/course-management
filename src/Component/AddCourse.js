import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { courseReducerActions } from "../redux/courseReducer";

const AddCourse = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    category: "",
  });
  const [optionValue, setOptionValue] = useState("");

  const dispatch = useDispatch();
  const authorData = useSelector((state) => state.authorReducer);

  const history = useHistory();

  const getInputValue = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const getOptionValue = (e) => {
    setOptionValue(e.target.value);
  };

  const addCourse = (e) => {
    e.preventDefault();
    if (optionValue !== "") {
      dispatch(
        courseReducerActions.addCourse({
          details: {
            title: inputValue.title,
            category: inputValue.category,
            author: optionValue,
          },
        })
      );
      setInputValue({ title: "", category: "", author: "" });
      history.push("/course");
    }
  };

  const options = authorData.map((eachData, eachDataIndex) => {
    return (
      <option key={eachDataIndex} value={eachData.name}>
        {eachData.name}
      </option>
    );
  });

  return (
    <>
      <Header />
      <div className="add__author__course__main__section">
        <h1>Add Course</h1>
        <form onSubmit={addCourse}>
          <input
            className="form__input"
            type="text"
            placeholder="Title"
            required
            name="title"
            value={inputValue.title}
            onChange={getInputValue}
          />
          <input
            className="form__input"
            type="text"
            placeholder="Category"
            required
            name="category"
            value={inputValue.category}
            onChange={getInputValue}
          />
          <select className="form__input" onChange={getOptionValue}>
            <option value="">Select option</option>
            {options}
          </select>

          <button className="form__button" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
