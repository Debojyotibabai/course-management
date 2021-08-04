import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "../redux/authorReducer";
import courseReducer from "./courseReducer";

const store = configureStore({
  reducer: { authorReducer, courseReducer },
});

export default store;
