import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppDispatch } from "../../store";
import { getSheetsByComposerAPICall } from "../data/dataAPI";
import { Composer, Sheet } from "../data/dataSlice";

interface SheetsState {
  detailedPreview: Composer | undefined;
  detailedPreviewSheets: Sheet[];
  status: "idle" | "loading" | "failed";
}

const initialState: SheetsState = {
  detailedPreview: undefined,
  detailedPreviewSheets: [],
  status: "idle",
};

export const addDetailedPreviewAsync = createAsyncThunk(
  "ui/addDetailedPreviewAsync",
  getSheetsByComposerAPICall
);

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
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

export const {} = uiSlice.actions;

export const selectDetailedPreview = (state: RootState) =>
  state.ui.detailedPreview;
export const selectDetailedPreviewSheets = (state: RootState) =>
  state.ui.detailedPreviewSheets;

export default uiSlice.reducer;
