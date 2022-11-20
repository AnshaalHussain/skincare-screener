import React from "react";
import FilterItem from "./FilterItem";
import styled from "styled-components";

const FilterList = () => {
  return (
    <div>
      <FilterListContainer>
        <GridContainer>
          <FilterItem label={"alcohol-free"} />
          <FilterItem label={"fragrance & essential oil free"} />
          <FilterItem label={"centella"} />
        </GridContainer>
      </FilterListContainer>
    </div>
  );
};

export default FilterList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FilterListContainer = styled.div`
  border: #9db5bb solid 0.5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 1rem;
  margin: 1rem;
`;
