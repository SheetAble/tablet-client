import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, useAppDispatch } from "../../store";
import {
  getSheetsAPICall,
  getSheetsByComposerAPICall,
  searchSheetsAPICall,
} from "../data/dataAPI";
import { Composer, Sheet } from "../data/dataSlice";

interface UIState {
  detailedPreview: Composer | undefined;
  detailedPreviewSheets: Sheet[] /* Sheets By Composer */;
  status: "idle" | "loading" | "failed";
  serverURL: string;
  searchResults: Sheet[];
  isSearchActive: boolean;
}

const initialState: UIState = {
  detailedPreview: undefined,
  detailedPreviewSheets: [],
  status: "idle",
  serverURL: "http://192.168.0.65:8080/api",
  searchResults: [],
  isSearchActive: false,
};

export const addDetailedPreviewAsync = createAsyncThunk(
  "ui/addDetailedPreviewAsync",
  getSheetsByComposerAPICall
);

export const setSearchResultsAsync = createAsyncThunk(
  "ui/setSearchResultsAsync",
  searchSheetsAPICall
);

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setServerURL: (state: UIState, action: PayloadAction<string>) => {
      axios.defaults.baseURL = action.payload;
      state.serverURL = action.payload;
    },
    emptySearchResults: (state: UIState) => {
      state.searchResults = [];
    },
    setIsSearchActive: (state: UIState, action: PayloadAction<boolean>) => {
      state.isSearchActive = action.payload;
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
      })

      .addCase(setSearchResultsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setSearchResultsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.searchResults = action.payload;
      });
  },
});

export const { setServerURL, emptySearchResults, setIsSearchActive } =
  uiSlice.actions;

export const selectSearchResults = (state: RootState) => state.ui.searchResults;
export const selecetIsSearchActive = (state: RootState) =>
  state.ui.isSearchActive;
export const selectServerURL = (state: RootState) => state.ui.serverURL;
export const selectDetailedPreview = (state: RootState) =>
  state.ui.detailedPreview;
export const selectDetailedPreviewSheets = (state: RootState) =>
  state.ui.detailedPreviewSheets;

export default uiSlice.reducer;
