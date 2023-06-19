import { createSlice } from "@reduxjs/toolkit";

export const visibilityStates = ["all", "active", "completed"];

const initialState = visibilityStates[0];

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    filterChanged: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const reducer = visibilityFilterSlice.reducer;
export const { filterChanged } = visibilityFilterSlice.actions;
