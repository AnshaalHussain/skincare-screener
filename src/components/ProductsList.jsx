import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSkincareProducts } from "../hooks/useSkincareProducts";
import ProductCards from "./ProductCards";

const ProductsList = ({ responseData, filterArr }) => {
  const [trueIngredients, setTrueIngredients] = useState([]);

  const { products } = useSkincareProducts("");

  // const TrueArr = () => {
  //   let newArr = [];
  //   for (let item in filterArr) {
  //     if (filterArr[item] == true) {
  //       newArr.push(item);
  //     }
  //   }
  //   setTrueIngredients(newArr);
  //   console.log("TRUEINGREDIENTS", trueIngredients);
  // };

  // useEffect(() => {
  //   TrueArr();
  // }, [filterArr]);

  // const filterIngredients = (item) => {
  //   // console.log(
  //   //   "return true or false",
  //   //   filterArr,
  //   //   item.ingredients.includes(trueIngredients),
  //   //   item,
  //   //   item.ingredients,
  //   //   "TRUE ING",
  //   //   trueIngredients
  //   // );
  //   for (let ingredient in trueIngredients) {
  //     if (item.ingredients.includes(ingredient) === true) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // const filteredMatches = responseData
  //   ? responseData
  //       .filter((products) => {
  //         // console.log("PRODUCTS", products);
  //         filterIngredients(products);
  //       })
  //       .map((filteredProduct) => {
  //         // console.log("FILTERED PRODUCTS", filteredProduct);
  //         <CardsListWrapper>
  //           <ProductCards
  //             image={filteredProduct.product_img}
  //             title={filteredProduct.title}
  //           />
  //         </CardsListWrapper>;
  //       })
  //   : "";

  // console.log("filtered matches", filteredMatches);

  return (
    <div>
      <TitleWrapper>Your Matches:</TitleWrapper>
      <MainPageWrapper>
        {/* <div>{filteredMatches ? filteredMatches : ""}</div> */}
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

const TitleWrapper = styled.div`
  margin: 0 1rem;
  font-size: 15px;
  font-weight: 700;
  padding-top: 1rem;
`;
