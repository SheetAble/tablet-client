import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getComposersAPICall, getSheetsAPICall } from "./dataAPI";

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

export type Composer = {
  safeName: string;
  name: string;
  portraitUrl: string;
  epoch: string;
  createdAt: string;
  updatedAt: string;
};

interface SheetsState {
  sheets: Sheet[];
  composers: Composer[];
  sheetsPage: Sheet[]; // Bigger list of sheets
  status: "idle" | "loading" | "failed";
}

const initialState: SheetsState = {
  sheets: [],
  composers: [],
  sheetsPage: [],
  status: "idle",
};

export const getSheetsAsync = createAsyncThunk(
  "data/getSheets",
  getSheetsAPICall
);

export const getComposersAsync = createAsyncThunk(
  "data/getComposers",
  getComposersAPICall
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
      })

      .addCase(getComposersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComposersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.composers = action.payload;
      });
  },
});

export const {} = dataSlice.actions;

export const selectSheets = (state: RootState) => state.data.sheets;
export const selectComposers = (state: RootState) => state.data.composers;
export const selectDataStatus = (state: RootState) => state.data.status;
export const selectData = (state: RootState) => state.data;

export default dataSlice.reducer;
