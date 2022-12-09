import { useState } from "react";
import styled from "styled-components";
import { THEMES } from "./styles/colors";
import { defaultIngredients } from "./data/defaultIngredients";

import Input from "./components/Input";
import FilterList from "./components/FilterList";
import ProductsList from "./components/ProductsList";
import { useSkincareProducts } from "./hooks/useSkincareProducts";
import useTrueIngredients from "./hooks/useTrueIngredients";
import Footer from "./components/Footer";

function App() {
  // the search input query to send to backend
  const [submitText, setSubmitText] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("error", error);

  // returns products data from backend using search input query
  const { products } = useSkincareProducts(
    submitText,
    setSubmitText,
    loading,
    setLoading
  );

  // object containing filter ingredient names and their checked states
  const [filterArr, setFilterArr] = useState(defaultIngredients);

  // this is the array of ingredients that have been set to true - meant for determining rating % for products
  const { ingredientsArr } = useTrueIngredients(filterArr);

  return (
    <div>
      <HeaderContainer>
        <MainContainer>
          <AppTitle>Skincare-Screener</AppTitle>

          {/* Search Bar */}
          <Input
            submitText={submitText}
            setSubmitText={setSubmitText}
            error={error}
            setError={setError}
          />

          {/* Filter */}
          <FilterList filterArr={filterArr} setFilterArr={setFilterArr} />

          {/* Renders Product Matches */}
          <ProductsList
            submitText={submitText}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
            productsData={products}
            ingredientsArr={ingredientsArr}
            loading={loading}
            error={error}
            setError={setError}
          />
        </MainContainer>
        <Footer />
      </HeaderContainer>
    </div>
  );
}

export default App;

const AppTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 2em;
  line-height: 2;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  color: #fff;

  @media only screen and (min-width: 768px) {
    padding-top: 2em;
    font-size: 3em;
  }
`;

// Pin footer to the bottom by making sure container takes up full width - footer height
const MainContainer = styled.div`
  min-height: calc(100vh - 7vh);
`;

const HeaderContainer = styled.div`
  height: 50vh;

  background-color: #ff70a2;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d3d0d7' fill-opacity='0.13'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  -webkit-box-shadow: inset 0px 18px 10px -7px rgba(0, 0, 0, 0.07);
  box-shadow: inset 0px 18px 10px -7px rgba(0, 0, 0, 0.07);

  @media only screen and (min-width: 768px) {
    height: 42vh;
  }
`;
