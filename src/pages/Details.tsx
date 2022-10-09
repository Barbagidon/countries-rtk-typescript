import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { useSelector } from "react-redux";
import { loadDetails, clearInfo } from "../features/Details/details-slice";
import { useEffect } from "react";
import { useAppDispatch } from "hooks";
import {
  selectDetails,
  selectDetailsCountry,
} from "features/Details/details-selectors";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clearInfoHandler = () => {
    dispatch(clearInfo());
  };

  useEffect(() => {
    if (name) {
      dispatch(loadDetails(name));
      return () => clearInfoHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, dispatch]);

  const [currentCountry] = useSelector(selectDetailsCountry);
  const { loading, error, neighboursNames } = useSelector(selectDetails);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error ? (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          {error}
        </div>
      ) : loading ? (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          {loading}
        </div>
      ) : (
        currentCountry && (
          <Info push={navigate} {...currentCountry} borders={neighboursNames} />
        )
      )}
    </div>
  );
};
