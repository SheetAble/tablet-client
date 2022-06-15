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

interface UserState {
  authenticated: boolean;
  status: "idle" | "loading" | "failed";
  userData: UserData | undefined;
  error: boolean;
}

const initialState: UserState = {
  authenticated: false,
  status: "idle",
  userData: undefined,
  error: false,
};

export const loginAsync = createAsyncThunk("user/login", loginAPICall);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticatedFalse: (state: UserState) => {
      state.authenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.authenticated = false;
        state.error = true;
        // Check if authentication was successful
        if (action.payload) {
          state.authenticated = true;
          state.error = false;
        }
      });
  },
});

export const { setAuthenticatedFalse } = userSlice.actions;

export const selectAuthenticated = (state: RootState) =>
  state.user.authenticated;
export const selectDataStatus = (state: RootState) => state.user.status;
export const selectLoginError = (state: RootState) => state.user.error;

export default userSlice.reducer;
