import { useState, useEffect } from "react";
import FilterItem from "./FilterItem";
import styled from "styled-components";
import PriceSlider from "./PriceSlider";
import FilteringState from "../utiils/FilterByIngredients";

const FilterList = ({ priceValue, setPriceValue }) => {
  // handle toggle of price and ingredients lists
  const [ingredientsTab, setIngredientsTab] = useState(true);
  const [priceTab, setPriceTab] = useState(false);

  const [filterArr, setFilterArr] = useState({});

  const ingredientList = [
    "alcohol-free",
    "centella",
    "fragrance free",
    "panthenol",
  ];

  useEffect(() => {
    FilteringState(ingredientList, filterArr);

    console.log("FilterObj", filterArr);
  }, [filterArr]);

  const handleOpen = (value, setter) => {
    setter(!value);
  };

  return (
    <div>
      <FilterListContainer>
        <Header onClick={() => handleOpen(ingredientsTab, setIngredientsTab)}>
          INGREDIENTS
        </Header>
        {ingredientsTab ? (
          <GridContainer>
            {ingredientList.map((item) => {
              return (
                <FilterItem
                  filterArr={filterArr}
                  setFilterArr={setFilterArr}
                  label={item}
                />
              );
            })}
          </GridContainer>
        ) : (
          <div></div>
        )}

        <Header onClick={() => handleOpen(priceTab, setPriceTab)}>
          PRICE RANGE
        </Header>

        {priceTab ? (
          <div>
            <PriceDisplay> Up to ${priceValue}</PriceDisplay>

            <PriceSlider
              priceValue={priceValue}
              setPriceValue={setPriceValue}
            />
          </div>
        ) : (
          <div></div>
        )}
      </FilterListContainer>
    </div>
  );
};

export default FilterList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

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

const PriceDisplay = styled.div`
  text-align: center;
`;
