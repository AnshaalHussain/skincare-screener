import { useState, useEffect } from "react";
import styled from "styled-components";
// import { IoCheckboxOutline } from "react-icons/io";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const FilterItem = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div onClick={() => handleChange()}>
      <FilterItemContainer>
        {checked ? (
          <MdOutlineCheckBox size={"15px"} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank size={"15px"} />
        )}

        <FilterHeader>{label}</FilterHeader>
      </FilterItemContainer>
    </div>
  );
};

export default FilterItem;

const FilterItemContainer = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const FilterHeader = styled.div`
  margin: 0.35em;
`;
