import axios from "axios";
import { countryDetails, countryNeighbours } from "../../api/urls";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Country, IDetailsState } from "types";

export const loadDetails = createAsyncThunk(
  "@@details/load-details",
  async (name: string) => {
    const { data: detailsAboutCountry } = await axios.get<[Country]>(
      countryDetails + name
    );

    if (detailsAboutCountry[0].borders) {
      const { data: neighbours } = await axios.get<Country[]>(
        countryNeighbours + detailsAboutCountry[0].borders.join(",")
      );

      const neighboursNames = neighbours.map((item) => item.name);

      return { detailsAboutCountry, neighboursNames };
    }

    return { detailsAboutCountry, neighboursNames: [] };
  }
);

const initialState: IDetailsState = {
  info: [],
  neighboursNames: [],
  loading: "",
  error: undefined,
};

export const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearInfo: (state) => {
      state.info = [];
      state.neighboursNames = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDetails.pending, (state, action) => {
        state.loading = "Loading...";
      })

      .addCase(loadDetails.fulfilled, (state, action) => {
        state.loading = "";
        state.neighboursNames = action.payload.neighboursNames;
        state.info = action.payload.detailsAboutCountry;
      })
      .addCase(loadDetails.rejected, (state, action) => {
        state.loading = "";
        state.error = action.error.name;
      });
  },
});

export const { clearInfo } = detailsSlice.actions;
