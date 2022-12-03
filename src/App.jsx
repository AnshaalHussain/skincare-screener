import { useState, useEffect } from "react";
import Input from "./components/Input";
import styled from "styled-components";
import FilterList from "./components/FilterList";
import ProductsList from "./components/ProductsList";
import FilteringState from "./utils/FilterByIngredients";
import { useSkincareProducts } from "./hooks/useSkincareProducts";
import useTrueIngredients from "./hooks/useTrueIngredients";

function App() {
  const [submitText, setSubmitText] = useState("");

  const [responseData, setResponseData] = useState("");
  const [priceValue, setPriceValue] = useState(0);

  const ingredientList = [
    "alcohol-free",
    "centella",
    "fragrance-free",
    "panthenol",
    "Lacryma-Jobi",
    "Water",
  ];

  let initialState = FilteringState(ingredientList);

  const [filterArr, setFilterArr] = useState(initialState);

  const { products } = useSkincareProducts(submitText, setSubmitText);

  const { ingredientsArr } = useTrueIngredients(filterArr);
  return (
    <div>
      <AppTitle>Skincare Screener</AppTitle>

      <SearchContainer>
        {/* Search Bar */}
        <Input submitText={submitText} setSubmitText={setSubmitText} />

        {/* Filter Controls */}
        <FilterList
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          filterArr={filterArr}
          setFilterArr={setFilterArr}
          ingredientList={ingredientList}
        />
        {/* Renders Product Matches */}
        <ProductsList
          submitText={submitText}
          responseData={responseData}
          filterArr={filterArr}
          setFilterArr={setFilterArr}
          productsData={products}
          ingredientsArr={ingredientsArr}
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
