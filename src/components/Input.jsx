import { useState } from "react";
import styled from "styled-components";
import { THEMES } from "../styles/colors";

const Input = ({ setSubmitText }) => {
  const [inputFieldValue, setInputFieldValue] = useState("");

  const handleOnSubmit = () => {
    setSubmitText(inputFieldValue);
  };

  return (
    <div>
      {/* inputField */}
      <InputWrapper>
        <SearchWrapper>
          <input
            value={inputFieldValue}
            onChange={(e) => setInputFieldValue(e.target.value)}
            placeholder={"search for product name"}
          />
          <StyledButton onClick={() => handleOnSubmit()}>Send</StyledButton>
        </SearchWrapper>
      </InputWrapper>
    </div>
  );
};

export default Input;

const InputWrapper = styled.div`
  margin-top: 0.95em;

  @media only screen and (min-width: 768px) {
    width: 40%;
    margin: auto;
    padding-top: 0.75em;
    padding-bottom: 2em;
  }
`;

const SearchWrapper = styled.div`
  // border: solid blue 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 75%;
  margin: auto;
  input {
    padding: 8px 17px;
    margin: 10px 2px;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 15px;
    font-size: 0.85em;
    appearance: none;
    border: 3px solid ${THEMES.TERTIARY};
  }

  input:focus {
    // background-color: lightblue;
  }

  @media only screen and (min-width: 768px) {
    width: 65%;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  background: ${THEMES.PRIMARY};
  border: 2px solid ${THEMES.TERTIARY};
  border-radius: 5px;
  width: 25%;
  font-size: 0.95em;
  font-weight: 500;
  color: #fff;
  text-align: center;
  height: 2rem;
  margin: 0px 3px;
`;
