import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "./theme-slice";
import { selectTheme } from "./theme-selectors";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Theme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ModeSwitcher
      onClick={() =>
        dispatch(switchTheme(theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? (
        <IoMoonOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{" "}
      <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};
