import { useDispatch } from "react-redux";
import { AppDispatch } from "types/hooks";

export const useAppDispatch: () => AppDispatch = useDispatch;
