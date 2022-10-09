import { Region } from "types";

export type CountryOption =
  | {
      label: Region;
      value: Region;
    }
  | "";
