import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const courseReducer = createSlice({
  name: "course reducer",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      return [...state, action.payload.details];
    },
    deleteCourse: (state, action) => {},
  },
});

export const courseReducerActions = courseReducer.actions;
export default courseReducer.reducer;
