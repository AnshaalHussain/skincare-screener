import { useState } from "react";
import styled from "styled-components";
import { THEMES } from "../styles/colors";

const FilterInput = ({ setFilterArr }) => {
  const [inputFieldValue, setInputFieldValue] = useState();

  // // Add inputted ingredient to filterArr
  const handleOnClick = () => {
    let obj = {};
    obj.name = inputFieldValue;
    obj.checked = false;
    setFilterArr((current) => [...current, obj]);
    setInputFieldValue("");
  };

  return (
    <div>
      <SearchWrapper>
        <input
          value={inputFieldValue}
          onChange={(e) => setInputFieldValue(e.target.value)}
          placeholder={"add an ingredient"}
        />
        <StyledButton onClick={() => handleOnClick()}>+</StyledButton>
      </SearchWrapper>
    </div>
  );
};

export default FilterInput;

const InputWrapper = styled.div``;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 70%;

  input {
    padding: 6px 17px;
    margin: 10px 2px;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    appearance: none;
    border: solid grey 1px;
  }

  input:focus {
  }

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  background: ${THEMES.PRIMARY};
  border: 2px solid ${THEMES.TERTIARY};
  border-radius: 5px;
  width: 20%;
  font-size: 1.2em;
  color: #fff;
  text-align: center;
  height: 1.8rem;
  margin: 0px 3px;

  &:hover {
    background-color: ${THEMES.PRIMARY_DARK};
    cursor: pointer;
  }
`;
