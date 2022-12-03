import { useEffect, useState } from "react";
import styled from "styled-components";
import useRatedList from "../hooks/useRatedList";
import ProductCards from "./ProductCards";

const ProductsList = ({ productsData, ingredientsArr }) => {
  const { ratedList } = useRatedList(productsData, ingredientsArr);

  return (
    <div>
      <TitleWrapper>Your Matches:</TitleWrapper>
      <MainPageWrapper>
        <div>{ratedList ? ratedList : ""}</div>
        {/* <CardsListWrapper>
          <ProductCards rating={4} />
        </CardsListWrapper> */}
      </MainPageWrapper>
    </div>
  );
};

export default ProductsList;

const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsListWrapper = styled.div`
  // width: 95%;
  margin: 1rem;
`;

const TitleWrapper = styled.div`
  margin: 0 1rem;
  font-size: 15px;
  font-weight: 700;
  padding-top: 1rem;
`;
