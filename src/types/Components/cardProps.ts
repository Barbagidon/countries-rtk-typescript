import { ICountryInfo } from "types/Countries/country";

export interface ICardProps extends ICountryInfo {
  onClick: () => void;
}
