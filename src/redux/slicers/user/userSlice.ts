import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { loginAPICall } from "./userAPI";

type UserData = {
  id: number;
  nickname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

interface SheetsState {
  authenticated: boolean;
  status: "idle" | "loading" | "failed";
  userData: UserData | undefined;
}

const initialState: SheetsState = {
  authenticated: false,
  status: "idle",
  userData: undefined,
};

export const loginAsync = createAsyncThunk("user/login", loginAPICall);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authenticated = false;
        // Check if authentication was successful
        if (action.payload) {
          state.authenticated = true;
        }
      });
  },
});

export const {} = dataSlice.actions;

export const selectAuthenticated = (state: RootState) =>
  state.user.authenticated;
export const selectDataStatus = (state: RootState) => state.user.status;

export default dataSlice.reducer;
