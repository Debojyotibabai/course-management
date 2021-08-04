import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const authorReducer = createSlice({
  name: "authors reducer",
  initialState,
  reducers: {
    addAuthor: (state, action) => {
      return [...state, action.payload.details];
    },
    deleteAuthor: (state, action) => {
      const newAuthorData = state.filter((eachData, eachDataIndex) => {
        return eachDataIndex !== action.payload;
      });
      return newAuthorData;
    },
  },
});

export const authorReducerActions = authorReducer.actions;
export default authorReducer.reducer;
