import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAllCountries, filterCountries } from "./countriesList-slice";
import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { Country } from "types/Countries/country";
import { selectCountries } from "./countriesList-selectors";
import { selectSearch } from "features/Search/search-selectors";
import { selectSelect } from "features/Select/select-selectors";
import { useAppDispatch } from "hooks";

export const CountriesList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { countries, loading, error } = useSelector(selectCountries);
  const { searchData } = useSelector(selectSearch);
  const region = useSelector(selectSelect);

  const visibleCountries: Country[] = filterCountries(
    countries,
    searchData,
    region
  );

  useEffect(() => {
    if (countries.length < 1) {
      dispatch(loadAllCountries());
    }
  }, [countries, dispatch]);

  return (
    <List>
      {error ? (
        error
      ) : loading ? (
        loading
      ) : (
        <>
          {visibleCountries.length < 1
            ? "Nothing found"
            : visibleCountries.map((c) => {
                const countryInfo = {
                  img: c.flags.png,
                  name: c.name,
                  info: [
                    {
                      title: "Population",
                      description: c.population.toLocaleString(),
                    },
                    {
                      title: "Region",
                      description: c.region,
                    },
                    {
                      title: "Capital",
                      description: c.capital,
                    },
                  ],
                };

                return (
                  <Card
                    key={c.name}
                    onClick={(): void => navigate(`/country/${c.name}`)}
                    {...countryInfo}
                  />
                );
              })}
        </>
      )}
    </List>
  );
};
