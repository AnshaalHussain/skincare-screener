import React from "react";
import styled from "styled-components";
import ProductCards from "./ProductCards";

const ProductsList = ({ responseData }) => {
  return (
    <div>
      <MainPageWrapper>
        <div>
          {responseData ? (
            <div>
              {responseData.map((item) => {
                return (
                  <CardsListWrapper>
                    <ProductCards image={item.product_img} title={item.title} />
                  </CardsListWrapper>
                );
              })}
            </div>
          ) : null}
        </div>

        <CardsListWrapper>
          <ProductCards />
        </CardsListWrapper>
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
