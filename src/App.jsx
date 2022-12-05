import { useState } from "react";
import styled from "styled-components";

import Input from "./components/Input";
import FilterList from "./components/FilterList";
import ProductsList from "./components/ProductsList";
import FilterInput from "./components/FilterInput";
import { useSkincareProducts } from "./hooks/useSkincareProducts";
import useTrueIngredients from "./hooks/useTrueIngredients";

function App() {
  // the search input query to send to backend
  const [submitText, setSubmitText] = useState("");

  // returns products data from backend using search input query
  const { products } = useSkincareProducts(submitText, setSubmitText);

  // object containing filter ingredient names and their checked states
  const [filterArr, setFilterArr] = useState([
    { name: "alcohol-free", checked: false },
    { name: "fragrance-free", checked: false },
    { name: "green tea", checked: false },
    { name: "jojoba oil", checked: false },
    { name: "ginseng", checked: false },
    { name: "tea tree", checked: false },
  ]);

  // this is the array of ingredients that have been set to true: meant for determining rating % for products
  const { ingredientsArr } = useTrueIngredients(filterArr);

  return (
    <div>
      <AppTitle>Skincare Screener</AppTitle>

      <MainContainer>
        {/* Search Bar */}
        <Input submitText={submitText} setSubmitText={setSubmitText} />

        {/* Filter */}
        <FilterList filterArr={filterArr} setFilterArr={setFilterArr} />

        {/* Filter Input Bar */}
        <FilterInput filterArr={filterArr} setFilterArr={setFilterArr} />

        {/* Renders Product Matches */}
        <ProductsList
          submitText={submitText}
          filterArr={filterArr}
          setFilterArr={setFilterArr}
          productsData={products}
          ingredientsArr={ingredientsArr}
        />
      </MainContainer>
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

const MainContainer = styled.div`
  padding: 0 1em;
  margin: 0 1rem;
`;
