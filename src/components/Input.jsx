import { useState, useEffect } from "react";
import queries from "../services/queries/queries";
import styled from "styled-components";
import ProductsList from "./ProductsList";
import HandleValueSetter from "../utils/HandleValueSetter";
import { useInput } from "../hooks/useInput";
import { useValueSetter } from "../hooks/useValueSetter";

const Input = ({ submitText, setSubmitText }) => {
  // const [inputFieldValue, setInputFieldValue] = useInput({
  //   placeholder: "enter a product name",
  // });
  const [inputFieldValue, setInputFieldValue] = useState("");

  useEffect(() => {
    console.log("submitText", submitText);
  }, [submitText]);

  useEffect(() => {
    console.log("input field val", inputFieldValue);
  }, [inputFieldValue]);

  // const onSubmit = useValueSetter;

  const handleOnSubmit = () => {
    setSubmitText(inputFieldValue);
  };
  // GET
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   queries
  //     .getHomePage()
  //     .then((res) => {
  //       console.log("res GET", res);
  //       setResponseData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  // POST
  // const onSendText = (e) => {
  //   e.preventDefault();
  //   queries
  //     .postHomeRoute(inputText)
  //     .then((res) => {
  //       console.log("res POST", res);
  //       setResponseData(res.data);
  //       setInputText("");
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  return (
    <div>
      <InputWrapper>
        <SearchWrapper>
          {/* {inputField} */}

          <input
            value={inputFieldValue}
            onChange={(e) => setInputFieldValue(e.target.value)}
            placeholder={"enter a product name"}
          />
          <button onClick={() => handleOnSubmit()}>Send</button>
          {/* <button onClick={(e) => onSubmit(e)}>Fetch Data</button> */}
          {/* <button onClick={() => GetSkincareAPI()}>Send SkinCare Api</button> */}
          {/* <button onClick={(e) => onSendText(e)}>Send Data</button> */}
          {/* <button onClick={onSubmit(inputFieldValue, () => setSubmitText)}> */}
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
