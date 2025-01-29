import { createSlice } from "@reduxjs/toolkit";
import { initialStateFilter } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilter,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.items;
