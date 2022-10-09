import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stateTheme } from "../../types/";

export const themeSlice = createSlice({
  name: "@@theme",
  initialState: "light" as stateTheme,
  reducers: {
    switchTheme: (_, action: PayloadAction<stateTheme>) => {
      return action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
