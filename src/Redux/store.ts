import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import projectCounter from "./slices/projectCounter";

export const store = configureStore({
  reducer: {
    projectCounter: projectCounter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
