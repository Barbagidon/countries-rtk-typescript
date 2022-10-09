import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Country, ICountriesListState } from "types";

import { allCountriesUrl } from "../../api/urls";

export const loadAllCountries = createAsyncThunk(
  "@@countriesList/load-all-countries",
  async () => {
    const { data } = await axios.get<Country[]>(allCountriesUrl);
    return data;
  }
);

const initialState: ICountriesListState = {
  countries: [],
  loading: "",
  error: undefined,
};

export const countriesListSlice = createSlice({
  name: "@@countriesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAllCountries.pending, (state, _) => {
        state.loading = "Loading...";
      })

      .addCase(loadAllCountries.fulfilled, (state, action) => {
        state.loading = "";
        state.countries = action.payload;
      })
      .addCase(loadAllCountries.rejected, (state, action) => {
        state.loading = "";
        state.error = action.error.name;
      });
  },
});

export const filterCountries = (
  countries: Country[],
  searchString: string,
  region = ""
) => {
  const filteredCountries = countries.filter((item) => {
    if (
      item.name.toLowerCase().includes(searchString.toLowerCase()) &&
      item.region.includes(region)
    ) {
      return true;
    }

    return false;
  });

  return filteredCountries;
};
