import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getVersion } from "./userListAPI";

type User = {
  name: string;
  age: number;
  id: number;
};

type UserPayload = {
  name: string;
  age: number;
};

interface UserListState {
  list: User[];
  version: string;
  status: "idle" | "loading" | "failed";
}

const initialState: UserListState = {
  list: [],
  version: "init version",
  status: "idle",
};

export const getVersionAsync = createAsyncThunk(
  "userlist/getVersion",
  getVersion
);

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserPayload>) => {
      state.list.push({
        name: action.payload.name,
        age: action.payload.age,
        id: state.list.length,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVersionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getVersionAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.version = action.payload.toString();
      });
  },
});

export const { addUser } = userListSlice.actions;

export const selectUserList = (state: RootState) => state.userlist.list;
export const selectVersion = (state: RootState) => state.userlist.version;

export default userListSlice.reducer;
