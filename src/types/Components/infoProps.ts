import { NavigateFunction } from "react-router";
import { Country } from "types/Countries/country";

export interface IInfoProps extends Country {
  push: NavigateFunction;
}
