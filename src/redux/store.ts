import { configureStore } from "@reduxjs/toolkit";
import notifReducer from "./features/notifSlice";
export const store = configureStore({
  reducer: {
    notifReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
