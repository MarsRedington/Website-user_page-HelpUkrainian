import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { eventsSlice } from "./eventsReducer";
import { IEvent } from "../../types/types";

let MockDataEvents = [
  {
    id: 1,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1686744055,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 2,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1686996055,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 3,
    locationId: "Location",
    type: "Workshop",
    level: "Resume",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1686416455,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 4,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689008455,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 5,
    locationId: "Location",
    type: "Workshop",
    level: "Networking",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1687622455,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 6,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1687600855,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 7,
    locationId: "Location",
    type: "Workshop",
    level: "Resume",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1687255255,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 6,
    locationId: "Location",
    type: "Workshop",
    level: "Resume",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689102029,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 7,
    locationId: "Location",
    type: "Workshop",
    level: "Networking",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689112829,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 8,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689102029,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 9,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689085428,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 10,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689262245,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 11,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689260445,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
  {
    id: 12,
    locationId: "Location",
    type: "Conversation Club",
    level: "Intermediate level",
    volunteerName: "Kateryna",
    volunteerPhone: "122333334",
    speaker: "Loren",
    event_date: 1689801009,
    description: "one",
    metadata: "",
    isOnline: false,
    isActive: true,
    topic:""
  },
];

export const fetchEvents = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(eventsSlice.actions.eventsFetching())
        // const response = await fetch(
        //     "",
        //     {
        //       method: "GET",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     }
        //   );
        dispatch(eventsSlice.actions.eventsFetchingSuccess(MockDataEvents))

    } catch(error) {
        dispatch(eventsSlice.actions.eventsFetchingError("Error"))
    }
}

export const addEvent = (event: IEvent) => (dispatch: AppDispatch) => {
  try {
      dispatch(eventsSlice.actions.addEvent(event))
  } catch(error) {
      
  }
}

export const deleteEvent = (event: IEvent) => (dispatch: AppDispatch) => {
  try {
      dispatch(eventsSlice.actions.deleteEvent(event))
  } catch(error) {
  }
}

// export const fetchEvents = createAsyncThunk(
//   "events/fetchAll",
//   async (_, thunkApi) => {
//     try {
//       const response = await fetch("", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return response;
//     } catch (e) {
//       return thunkApi.rejectWithValue("Error");
//     }
//   }
// );
