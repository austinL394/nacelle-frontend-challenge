import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { INotification } from "../../models/INotification";

const initialState: INotification[] = [];
const COLORS = [
  "green",
  "blue",
  "pink",
  "gray",
  "orange",
  "indigo",
  "aquamarine",
  "slateblue",
  "purple",
  "cyan",
  "lime",
];

export const notifSlice = createSlice({
  name: "notifSlice",
  initialState,
  reducers: {
    newNotification: (state, action: PayloadAction<string>) => {
      return [
        ...state,
        {
          id: uuidv4(),
          message: action.payload,
          color: COLORS[Math.floor(Math.random() * 11)],
        },
      ];
    },
    deleteNotification: (state, action: PayloadAction<string>) => {
      return [...state.filter((notif) => notif.id !== action.payload)];
    },
  },
});

export const { newNotification, deleteNotification } = notifSlice.actions;
export default notifSlice.reducer;
