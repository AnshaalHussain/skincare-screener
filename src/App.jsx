import { useState, useEffect } from "react";
import Input from "./components/Input";
import styled from "styled-components";
import FilterList from "./components/FilterList";
import ProductsList from "./components/ProductsList";
import FilteringState from "./utiils/FilterByIngredients";

function App() {
  const ingredientList = [
    "alcohol-free",
    "centella",
    "fragrance free",
    "panthenol",
  ];

  let initialState = FilteringState(ingredientList);

  const [responseData, setResponseData] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [filterArr, setFilterArr] = useState(initialState);

  return (
    <div>
      <AppTitle>Skincare Screener</AppTitle>

      <SearchContainer>
        <Input responseData={responseData} setResponseData={setResponseData} />
        <FilterList
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          filterArr={filterArr}
          setFilterArr={setFilterArr}
          ingredientList={ingredientList}
        />
        <ProductsList
          responseData={responseData}
          filterArr={filterArr}
          setFilterArr={setFilterArr}
        />
      </SearchContainer>
    </div>
  );
}

export default App;

const AppTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 2.1;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`;

const SearchContainer = styled.div`
  padding: 0 1em;
  margin: 0 1rem;
`;
