import { RootState } from "types/store";

export const selectDetails = (state: RootState) => state.details;
export const selectDetailsCountry = (state: RootState) => state.details.info;
