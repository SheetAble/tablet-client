import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Composer, Sheet } from "../data/dataSlice";

interface SheetsState {
  detailedPreview: Composer | undefined;
  status: "idle" | "loading" | "failed";
}

const initialState: SheetsState = {
  detailedPreview: undefined,
  status: "idle",
};

export const uiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addDetailedPreview: (state, action: PayloadAction<Composer>) => {
      state.detailedPreview = action.payload;
    },
  },
});

export const { addDetailedPreview } = uiSlice.actions;

export const selectDetailedPreview = (state: RootState) =>
  state.ui.detailedPreview;

export default uiSlice.reducer;
