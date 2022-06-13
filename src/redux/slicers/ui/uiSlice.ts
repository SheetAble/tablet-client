import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, useAppDispatch } from "../../store";
import { getSheetsByComposerAPICall } from "../data/dataAPI";
import { Composer, Sheet } from "../data/dataSlice";

interface UIState {
  detailedPreview: Composer | undefined;
  detailedPreviewSheets: Sheet[] /* Sheets By Composer */;
  status: "idle" | "loading" | "failed";
  serverURL: string;
}

const initialState: UIState = {
  detailedPreview: undefined,
  detailedPreviewSheets: [],
  status: "idle",
  serverURL: "http://192.168.0.65:8080/api",
};

export const addDetailedPreviewAsync = createAsyncThunk(
  "ui/addDetailedPreviewAsync",
  getSheetsByComposerAPICall
);

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setServerURL: (state: UIState, action: PayloadAction<string>) => {
      axios.defaults.baseURL = action.payload;
      state.serverURL = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDetailedPreviewAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addDetailedPreviewAsync.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) {
          state.detailedPreviewSheets = action.payload?.sheets;
          state.detailedPreview = action.payload?.composer;
        }
      });
  },
});

export const { setServerURL } = uiSlice.actions;

export const selectServerURL = (state: RootState) => state.ui.serverURL;
export const selectDetailedPreview = (state: RootState) =>
  state.ui.detailedPreview;
export const selectDetailedPreviewSheets = (state: RootState) =>
  state.ui.detailedPreviewSheets;

export default uiSlice.reducer;
