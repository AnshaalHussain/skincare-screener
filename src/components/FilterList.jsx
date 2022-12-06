import { useState } from "react";
import styled from "styled-components";
import { THEMES } from "../styles/colors";

import HandleValueSetter from "../utils/HandleValueSetter";
import useFilterList from "../hooks/useFilterList";
import FilterInput from "./FilterInput";

const FilterList = ({ filterArr, setFilterArr }) => {
  // Handle toggling open of lists
  const [ingredientsTab, setIngredientsTab] = useState(true);

  // returns list of ingredients mapped to FilterItem components
  const { ingredientsAddedList } = useFilterList(filterArr, setFilterArr);

  const handleOpen = HandleValueSetter;

  return (
    <div>
      <FilterListContainer>
        <Header onClick={() => handleOpen(ingredientsTab, setIngredientsTab)}>
          INGREDIENTS FILTER
        </Header>
        <FilterInput filterArr={filterArr} setFilterArr={setFilterArr} />

        <div>{ingredientsAddedList ? ingredientsAddedList : ""}</div>
      </FilterListContainer>
    </div>
  );
};

export default FilterList;

const FilterListContainer = styled.div`
  border: #9db5bb solid 0.5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 1rem;
  margin: 0.5rem 1rem;
  background: #fff;
`;

const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 0.75em;
  color: grey;
  line-height: 1.95em;
  padding: 0.15em;
  width: 95%;
  margin: auto;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.2);

  border: solid lightgrey 1px;
  border-radius: 3px;
  background-color: ${THEMES.TERTIARY};
`;
