import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "../filters/constants";

const filtersInitialState = {
  status: statusFilter.all,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
