import styled from "styled-components";

import { Search } from "../features/Search/Search";
import { CustomSelect } from "./CustomSelect";
import { setSelect } from "../features/Select/select-slice";
import { useSelector } from "react-redux";
import { selectSelect } from "features/Select/select-selectors";
import { useAppDispatch } from "hooks";
import { Region, handleSetRegionType } from "types";

const optionsMap: Record<Region, { value: Region; label: Region }> = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectSelect);

  const handleSetRegion: handleSetRegionType = (r) => {
    if (r) {
      dispatch(setSelect(r?.value));
    } else {
      dispatch(setSelect(""));
    }
  };

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region ? optionsMap[region] : ""}
        onChange={(e) => handleSetRegion(e)}
      />
    </Wrapper>
  );
};
