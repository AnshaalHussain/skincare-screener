import { useState } from "react";

import styled from "styled-components";

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
            placeholder={"enter a product name"}
          />
          <button onClick={() => handleOnSubmit()}>Send</button>
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
