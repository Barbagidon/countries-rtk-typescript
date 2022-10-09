import { Country } from "types";

export interface ICountriesListState {
  countries: Country[];
  loading: "Loading..." | "";
  error?: string;
}
