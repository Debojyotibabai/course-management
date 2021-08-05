import React from "react";
import Header from "./Header";
import "../App.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { courseReducerActions } from "../redux/courseReducer";

const Course = () => {
  const isLogin = localStorage.getItem("cud");
  const history = useHistory();

  const dispatch = useDispatch();

  const authorData = useSelector((state) => state.authorReducer);
  const courseData = useSelector((state) => state.courseReducer);

  const goAddCourse = () => {
    if (isLogin == null) {
      Swal.fire({
        title: "Signin to add",
        confirmButtonColor: "#ff4848",
      });
      history.push("/login");
    } else if (authorData.length === 0) {
      Swal.fire({
        title: "Add author first",
        confirmButtonColor: "#ff4848",
      });
      history.push("/author/addauthor");
    } else {
      history.push("/course/addcourse");
    }
  };

  const deleteCourse = (index) => {
    if (isLogin == null) {
      toast.error("Signin to delete course.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else {
      dispatch(courseReducerActions.deleteCourse(index));
    }
  };

  return (
    <>
      <Header />
      <div className="author__course__main__section">
        <h1>Courses</h1>
        <button onClick={goAddCourse}>Add Course</button>
      </div>
      {courseData.length !== 0 ? (
        <table className="table course__table">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          {courseData.map((eachData, eachDataIndex) => {
            return (
              <tr key={eachDataIndex}>
                <td>{eachData.title}</td>
                <td>{eachData.category}</td>
                <td>{eachData.author}</td>
                <td
                  className="table__delete"
                  onClick={deleteCourse.bind(this, eachDataIndex)}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <p className="not__available">No course available.</p>
      )}
      <ToastContainer />
    </>
  );
};

export default Course;
