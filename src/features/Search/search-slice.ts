import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "@@search",
  initialState: {
    searchData: "",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
