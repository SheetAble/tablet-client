import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  getComposersAsync,
  getComposersPageAsync,
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
  dispatch(getComposersAsync({}));
  dispatch(
    getComposersPageAsync({
      limit: "1000",
    })
  );
};
