import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  getComposersAsync,
  getSheetsAsync,
  getSheetsPageAsync,
} from "../redux/slicers/data/dataSlice";
import { useAppDispatch } from "../redux/store";

export const syncAll = (dispatch: any) => {
  /*	
		Sync all data
	*/

  dispatch(getSheetsAsync({}));
  dispatch(
    getSheetsPageAsync({
      limit: "1000",
    })
  );
  dispatch(getComposersAsync());
};
