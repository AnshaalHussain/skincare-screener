import React from "react";
import styled from "styled-components";
import { THEMES } from "../styles/colors";
import Circle from "./Circle";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const ProductCards = ({ image, title, rating, url }) => {
  const sampleImage =
    "https://incidecoder-content.storage.googleapis.com/5b9a5434-b18b-4b6a-8ae0-d23d62ad2c76/products/canmake-cream-cheek/canmake-cream-cheek_front_photo_original.jpeg";
  return (
    <div>
      <CardWrapper>
        <GridWrapper>
          <ProductWrapper>
            <TitleWrapper>
              <p>{title || "Canmake Cream Cheek UV Gel"}</p>
            </TitleWrapper>

            <ImageWrapper>
              <img src={image || sampleImage} />
            </ImageWrapper>
            <LearnMoreWrapper>
              <a
                href={url ? `${url}` : "https://incidecoder.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
                <span>
                  <HiOutlineQuestionMarkCircle />
                </span>
              </a>
            </LearnMoreWrapper>
          </ProductWrapper>
          <CircleWrapper>
            <Circle rating={rating} />
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
  border: 1px solid lightgrey;
  padding: 10px;
  margin: 1em;

  @media only screen and (min-width: 768px) {
    min-width: 65%;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    width: 65%;
    margin: auto;
  }
`;

const ImageWrapper = styled.div`
  background: white;
  width: 130px;
  height: 110px;

  display: flex;

  img {
    display: block;
    overflow: none;
    max-width: 130px;
    max-height: 130px;
    width: auto;
    height: auto;
    margin: auto;
  }
`;

const TitleWrapper = styled.div`
  font-size: 1em;
  text-align: center;
  max-width: 90%;
  font-weight: 400;
  line-height: 1.1em;

  a {
    color: #0a7cff;
  }

  a:visited {
    color: #0a7cff;
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LearnMoreWrapper = styled.div`
  color: ${THEMES.PRIMARY};
  font-weight: 400;
  font-size: 0.9em;
  text-align: center;
  padding-top: 1rem;
  margin-top: 1em;

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;

    &:visted {
      text-decoration: none;
    }

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
