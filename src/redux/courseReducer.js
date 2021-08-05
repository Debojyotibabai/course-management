import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const courseReducer = createSlice({
  name: "course reducer",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      return [...state, action.payload.details];
    },
    deleteCourse: (state, action) => {
      const newCourseData = state.filter((eachData, eachDataIndex) => {
        return eachDataIndex !== action.payload;
      });
      return newCourseData;
    },
  },
});

export const courseReducerActions = courseReducer.actions;
export default courseReducer.reducer;
