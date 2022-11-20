import { useState, useEffect } from "react";
import styled from "styled-components";

const FilterItem = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <CheckBoxWrapper>
        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          {label}
        </label>
      </CheckBoxWrapper>
    </div>
  );
};

export default FilterItem;

const CheckBoxWrapper = styled.div`
  margin: 0 0.5em;
  padding: 0 0.5em;
  font-size: 10px;
  line-height: 1;
`;
