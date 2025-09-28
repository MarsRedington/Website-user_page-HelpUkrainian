import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  FilterState, IFilter } from "../../types/types";

const initalFilterState: FilterState = {
  // filter: {
  //   cClub: {
  //     all: false,
  //     basic: false,
  //     inter: false,
  //     upper: false,
  //   },
  //   workShop: {
  //     all: false,
  //     resume: false,
  //     interwiew: false,
  //     net: false,
  //   }
  // },
  filter: {
    allClub: false,
    basic: false,
    intermediate: false,
    upper: false,
    allWorkshop: false,
    resume: false,
    interwiew: false,
    networking: false
  },
//   isLoading: false,
//   error: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initalFilterState,
  reducers: {
    // filterFetching(state) {
    //   state.isLoading = true;
    // },
    filterFetchingSuccess(state, action: PayloadAction<IFilter>) {
    //   state.isLoading = false;
    //   state.error = "";
      state.filter = action.payload;
    },
    filterFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    },
    changeFilter(state, action: PayloadAction<IFilter>) {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
