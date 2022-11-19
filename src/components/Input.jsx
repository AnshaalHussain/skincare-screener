import { useState, useEffect } from "react";
import axios from "axios";
import queries from "../services/queries/queries";
import styled from "styled-components";
import ProductCards from "./ProductCards";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    console.log("responseData", responseData);
  }, [responseData]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  // GET
  const onSubmit = (e) => {
    e.preventDefault();

    queries
      .getHomePage()
      .then((res) => {
        console.log("res GET", res);
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // POST
  const onSendText = (e) => {
    e.preventDefault();
    queries
      .postHomeRoute(inputText)
      .then((res) => {
        console.log("res POST", res);
        setResponseData(res.data);
        setInputText("");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const GetSkincareAPI = () => {
    queries
      .getSkinCareDatabase()
      .then((res) => {
        console.log("SKINCARE API", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  };

  return (
    <div>
      <input
        onChange={(e) => onChange(e)}
        value={inputText}
        placeholder={"enter a product name"}
      />
      {/* <button onClick={(e) => onSubmit(e)}>Fetch Data</button> */}
      <button onClick={(e) => onSendText(e)}>Send Data</button>
      {/* <button onClick={() => GetSkincareAPI()}>Send SkinCare Api</button> */}
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

export default Input;

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
