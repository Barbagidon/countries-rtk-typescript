import { RootState } from "types/store";

export const selectCountries = (state: RootState) => state.countriesList;
