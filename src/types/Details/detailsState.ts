import { Country } from "types";

export interface IDetailsState {
  info: [Country] | [];
  neighboursNames: string[];
  loading: "" | "Loading...";
  error?: string;
}
