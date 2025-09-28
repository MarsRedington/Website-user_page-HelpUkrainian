import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState, IUser } from "../../types/types";

const initalUserState: UserState = {
  user: {} as IUser,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
