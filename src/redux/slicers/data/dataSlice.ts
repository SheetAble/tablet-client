import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getSheetsAPICall } from "./dataAPI";

export type Sheet = {
  safeSheetName: string;
  sheetName: string;
  safeComposer: string;
  composer: string;
  releaseDate: string;
  pdfUrl: string;
  uploaderId: number;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  informationText: string;
};

interface SheetsState {
  sheets: Sheet[];
  status: "idle" | "loading" | "failed";
}

const initialState: SheetsState = {
  sheets: [],
  status: "idle",
};

export const getSheetsAsync = createAsyncThunk(
  "data/getSheets",
  getSheetsAPICall
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSheetsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSheetsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.sheets = action.payload;
      });
  },
});

export const {} = dataSlice.actions;

export const selectSheets = (state: RootState) => state.data.sheets;
export const selectDataStatus = (state: RootState) => state.data.status;

export default dataSlice.reducer;
