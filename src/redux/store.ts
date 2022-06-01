import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./slicers/counter/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userListSlice from "./slicers/userList/userListSlice";
import dataSlice from "./slicers/data/dataSlice";
import userSlice from "./slicers/user/userSlice";
import uiSlice from "./slicers/ui/uiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userlist: userListSlice,
    data: dataSlice,
    user: userSlice,
    ui: uiSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
