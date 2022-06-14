import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, useAppDispatch } from "../../store";
import {
  getSheetsAPICall,
  getSheetsByComposerAPICall,
  searchComposersAPICall,
  searchSheetsAPICall,
} from "../data/dataAPI";
import { Composer, Sheet } from "../data/dataSlice";

interface UIState {
  detailedPreview: Composer | undefined;
  detailedPreviewSheets: Sheet[] /* Sheets By Composer */;
  status: "idle" | "loading" | "failed";
  serverURL: string;
  searchSheetResults: Sheet[];
  searchComposerResults: Composer[];
  isSearchActive: boolean;
}

const initialState: UIState = {
  detailedPreview: undefined,
  detailedPreviewSheets: [],
  status: "idle",
  serverURL: "http://192.168.0.65:8080/api",
  searchSheetResults: [],
  searchComposerResults: [],
  isSearchActive: false,
};

export const addDetailedPreviewAsync = createAsyncThunk(
  "ui/addDetailedPreviewAsync",
  getSheetsByComposerAPICall
);

export const setSearchSheetResultsAsync = createAsyncThunk(
  "ui/setSearchResultsAsync",
  searchSheetsAPICall
);

export const setSearchComposerResultsAsync = createAsyncThunk(
  "ui/setSearchComposerResultsAsync",
  searchComposersAPICall
);

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setServerURL: (state: UIState, action: PayloadAction<string>) => {
      axios.defaults.baseURL = action.payload;
      state.serverURL = action.payload;
    },
    emptySearchSheetResults: (state: UIState) => {
      state.searchSheetResults = [];
    },
    emptySearchComposerResults: (state: UIState) => {
      state.searchComposerResults = [];
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

      .addCase(setSearchSheetResultsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setSearchSheetResultsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.searchSheetResults = action.payload;
      })

      .addCase(setSearchComposerResultsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setSearchComposerResultsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.searchComposerResults = action.payload;
      });
  },
});

export const {
  setServerURL,
  emptySearchSheetResults,
  emptySearchComposerResults,
  setIsSearchActive,
} = uiSlice.actions;

export const selectSearchComposerResults = (state: RootState) =>
  state.ui.searchComposerResults;
export const selectSearchSheetResults = (state: RootState) =>
  state.ui.searchSheetResults;
export const selecetIsSearchActive = (state: RootState) =>
  state.ui.isSearchActive;
export const selectServerURL = (state: RootState) => state.ui.serverURL;
export const selectDetailedPreview = (state: RootState) =>
  state.ui.detailedPreview;
export const selectDetailedPreviewSheets = (state: RootState) =>
  state.ui.detailedPreviewSheets;

export default uiSlice.reducer;
