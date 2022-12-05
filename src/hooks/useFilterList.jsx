import { useState, useEffect } from "react";
import styled from "styled-components";
import FilterItem from "../components/FilterItem";

const useFilterList = (filterArr, setFilterArr) => {
  const [ingredientsAddedList, setIngredientsAddedList] = useState();

  useEffect(() => {
    let mappedFilterList = (
      <GridContainer>
        {filterArr.map((item) => {
          return (
            <FilterItem
              filterArr={filterArr}
              setFilterArr={setFilterArr}
              label={item.name}
            />
          );
        })}
      </GridContainer>
    );

    setIngredientsAddedList(mappedFilterList);
  }, [filterArr]);

  return { ingredientsAddedList };
};

export default useFilterList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;
