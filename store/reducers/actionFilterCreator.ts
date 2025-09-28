import { AppDispatch } from "..";
import { IFilter } from "../../types/types";
import { filterSlice } from "./filterReducer";

let MockDataFilter = {
  allClub: true,
  basic: true,
  intermediate: true,
  upper: true,
  allWorkshop: true,
  resume: true,
  interwiew: true,
  networking: true
}

export const fetchFilter = () => async (dispatch: AppDispatch) => {
    try {
        // dispatch(filterSlice.actions.filterFetching())
 
        dispatch(filterSlice.actions.filterFetchingSuccess(MockDataFilter))

    } catch(error) {
        dispatch(filterSlice.actions.filterFetchingError("Error"))
    }
}


export const changeFilter = (filters: IFilter) => (dispatch: AppDispatch) => {
  try {
      dispatch(filterSlice.actions.changeFilter(filters))
  } catch(error) {
  }
}
