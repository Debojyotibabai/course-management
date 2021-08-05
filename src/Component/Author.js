import React from "react";
import Header from "./Header";
import "../App.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { authorReducerActions } from "../redux/authorReducer";

const Author = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const authorData = useSelector((state) => state.authorReducer);
  const courseData = useSelector((state) => state.courseReducer);

  const isLogin = localStorage.getItem("cud");

  const goAddAuthor = () => {
    if (isLogin !== null) {
      history.push("/author/addauthor");
    } else {
      Swal.fire({
        title: "Signin to add",
        confirmButtonColor: "#ff4848",
      });
      history.push("/login");
    }
  };

  const deleteAuthor = (index, name) => {
    const isThere = courseData.some((eachData) => {
      return name === eachData.author;
    });

    if (isLogin == null) {
      toast.error("Signin to delete author.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else if (isThere) {
      toast.error("This author is added in courses, you can't delete it.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else {
      dispatch(authorReducerActions.deleteAuthor(index));
    }
  };

  return (
    <>
      <Header />
      <div className="author__course__main__section">
        <h1>Authors</h1>
        <button onClick={goAddAuthor}>Add Author</button>
      </div>
      {authorData.length !== 0 ? (
        <table className="table author__table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          {authorData.map((eachData, eachDataIndex) => {
            return (
              <tr key={eachDataIndex}>
                <td>{eachData.id}</td>
                <td>{eachData.name}</td>
                <td
                  className="table__delete"
                  onClick={deleteAuthor.bind(
                    this,
                    eachDataIndex,
                    eachData.name
                  )}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <p className="not__available">No author available.</p>
      )}
      <ToastContainer />
    </>
  );
};

export default Author;
