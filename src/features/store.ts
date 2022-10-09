import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./Theme/theme-slice";
import { countriesListSlice } from "./CountriesList/countriesList-slice";
import { searchSlice } from "./Search/search-slice";
import { selectSlice } from "./Select/select-slice";
import { detailsSlice } from "./Details/details-slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    countriesList: countriesListSlice.reducer,
    search: searchSlice.reducer,
    region: selectSlice.reducer,
    details: detailsSlice.reducer,
  },
  devTools: true,
});
