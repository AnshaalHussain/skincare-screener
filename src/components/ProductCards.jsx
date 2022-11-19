import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const ProductCards = ({ image, title }) => {
  const sampleImage =
    "https://incidecoder-content.storage.googleapis.com/5b9a5434-b18b-4b6a-8ae0-d23d62ad2c76/products/canmake-cream-cheek/canmake-cream-cheek_front_photo_original.jpeg";
  return (
    <div>
      <CardWrapper>
        <GridWrapper>
          <ProductWrapper>
            <TitleWrapper>
              <p>{title || "Canmake Cream Cheek"}</p>
            </TitleWrapper>

            <ImageWrapper>
              <img src={image || sampleImage} />
            </ImageWrapper>
          </ProductWrapper>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
        </GridWrapper>
      </CardWrapper>
    </div>
  );
};

export default ProductCards;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 3px 5px;
  @media only screen and (min-width: 750px) {
    max-width: 800px;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  background: white;
  width: 150px;
  height: 120px;

  display: flex;

  img {
    width: 100%;
    height: auto;
    overflow: none;
  }

  @media only screen and (min-width: 750px) {
    img {
      max-width: 400px;
      max-height: 350px;
    }
  }
`;

const TitleWrapper = styled.div`
  font-size: 15px;
  text-align: center;
  // color: #eff7fa;
  color: #0a7cff;
  // background: #0a7cff;
  max-width: 80%;
`;

const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
