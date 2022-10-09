import { createSlice } from "@reduxjs/toolkit";
import { Region } from "types";

export const selectSlice = createSlice({
  name: "@@select",
  initialState: "" as Region,
  reducers: {
    setSelect: (_, action) => {
      return action.payload;
    },
  },
});

export const { setSelect } = selectSlice.actions;
