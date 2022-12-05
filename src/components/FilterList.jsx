import { useState } from "react";
import styled from "styled-components";

import HandleValueSetter from "../utils/HandleValueSetter";
import useFilterList from "../hooks/useFilterList";

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
          INGREDIENTS
        </Header>

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
  margin: 1rem;
`;

const Header = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 0.85em;
  padding: 0.45em;
  margin-bottom: 10px;
  border: solid grey 1px;
`;
