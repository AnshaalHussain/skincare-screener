import { useState, useEffect } from "react";
import queries from "../services/queries/queries";
import styled from "styled-components";
import ProductsList from "./ProductsList";

const Input = ({ responseData, setResponseData }) => {
  const [inputText, setInputText] = useState("");

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
      <InputWrapper>
        <SearchWrapper>
          <input
            onChange={(e) => onChange(e)}
            value={inputText}
            placeholder={"enter a product name"}
          />
          {/* <button onClick={(e) => onSubmit(e)}>Fetch Data</button> */}
          {/* <button onClick={() => GetSkincareAPI()}>Send SkinCare Api</button> */}
          <button onClick={(e) => onSendText(e)}>Send Data</button>
        </SearchWrapper>
      </InputWrapper>
    </div>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.div``;
