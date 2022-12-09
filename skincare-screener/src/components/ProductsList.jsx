import styled from "styled-components";
import { IconContext } from "react-icons";

import useRatedList from "../hooks/useRatedList";
import { AiOutlineSmile, AiOutlineFrown } from "react-icons/ai";
import BarLoader from "react-spinners/BarLoader";

const ProductsList = ({
  filterArr,
  productsData,
  ingredientsArr,
  loading,
  error,
  setError,
  submitText,
}) => {
  // useRatedList hook: maps over and checks whether each ingredient is included in each product, returns the mapped ProductCards components that have the final ratings and product data

  const { ratedList } = useRatedList(
    productsData,
    ingredientsArr,
    filterArr,
    error,
    setError,
    submitText
  );

  return (
    <div>
      <MainPageWrapper>
        <TitleWrapper>SEARCH RESULTS:</TitleWrapper>

        <BarLoader loading={loading} size={150} />

        {ratedList.length > 0 ? (
          ratedList
        ) : error === true ? (
          <InformModule>
            No matches were found
            <span>
              <IconContext.Provider value={{ size: "1.2em" }}>
                <div style={{ marginTop: 5 }}>
                  <AiOutlineFrown />
                </div>
              </IconContext.Provider>
            </span>
          </InformModule>
        ) : (
          <InformModule>
            {loading
              ? "Searching... this may take a few mins"
              : "Search for a product to view matches"}
            <span>
              <IconContext.Provider value={{ size: "1.2em" }}>
                <div style={{ marginTop: 5 }}>
                  <AiOutlineSmile />
                </div>
              </IconContext.Provider>
            </span>
          </InformModule>
        )}
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
  margin-top: 2em;

  @media only screen and (min-width: 768px) {
    width: 42%;
    margin: auto;
  }
`;

const TitleWrapper = styled.div`
  text-align: left;
  font-weight: 700;
  font-size: 0.85em;
  letter-spacing: 0.8px;
  color: grey;
  line-height: 1.95em;
  padding: 0.15em;
  width: 95%;
  margin-left: 2em;
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    margin-left: 0em;
  }
`;

const InformModule = styled.div`
  color: grey;
  font-weight: 400;
  border: 1px lightgrey dashed;
  border-radius: 5px;
  padding: 1em;
  margin: 1.5em auto;
  min-height: 7em;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 0.5em;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    margin: 1em auto;
  }
`;
