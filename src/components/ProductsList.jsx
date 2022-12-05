import styled from "styled-components";
import useRatedList from "../hooks/useRatedList";

const ProductsList = ({ filterArr, productsData, ingredientsArr }) => {
  // useRatedList hook: maps over each ingredients and checks whether it's included in each product, returns the mapped ProductCards components that have the final ratings and product data
  const { ratedList } = useRatedList(productsData, ingredientsArr, filterArr);

  return (
    <div>
      <TitleWrapper>Your Matches:</TitleWrapper>
      <MainPageWrapper>
        <div>{ratedList ? ratedList : ""}</div>
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
