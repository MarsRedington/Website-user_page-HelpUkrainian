import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventsState, IEvent } from "../../types/types";

const initalEventsState: EventsState = {
  events: [],
  isLoading: false,
  error: "",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState: initalEventsState,
  reducers: {
    eventsFetching(state) {
      state.isLoading = true;
    },
    eventsFetchingSuccess(state, action: PayloadAction<IEvent[]>) {
      state.isLoading = false;
      state.error = "";
      state.events = action.payload;
    },
    eventsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addEvent(state, action: PayloadAction<IEvent>) {
      state.events.push(action.payload);
    },
    deleteEvent(state, action: PayloadAction<IEvent>) {
      state.events = state.events.filter((item) => item.id !== action.payload.id);
    }
  },
//   extraReducers: {
//     [fetchEvents.fulfilled.type]: (state, action: PayloadAction<IEvents[]>) => {
//       state.isLoading = false;
//       state.error = "";
//       state.events = action.payload;
//     },
//     [fetchEvents.pending.type]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchEvents.rejected.type]: (state, action: PayloadAction<string>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
});

export default eventsSlice.reducer;
