import { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";

import { RiInkBottleLine } from "react-icons/ri";

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
          <IconContext.Provider value={{ size: "1.1em" }}>
            <RiInkBottleLine />
          </IconContext.Provider>
          <span>INGREDIENTS FILTER</span>
        </Header>

        <FilterInput filterArr={filterArr} setFilterArr={setFilterArr} />
        <IngredientsAddedListContainer>
          {ingredientsAddedList ? ingredientsAddedList : ""}
        </IngredientsAddedListContainer>
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
  margin-top: 2em;

  @media only screen and (min-width: 768px) {
    max-width: 40%;
    margin: 1em auto;
  }
`;

const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 0.85em;
  letter-spacing: 0.8px;
  color: grey;
  line-height: 1.95em;
  padding: 0.15em;
  width: 95%;
  margin: auto;
  border-radius: 5px;

  display: flex;
  justify-contents: start;
  align-items: center;

  span {
    margin-left: 0.5em;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 0em;
  }
`;

const IngredientsAddedListContainer = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 0em auto;
    margin-left: 0.45em;
  }
`;
