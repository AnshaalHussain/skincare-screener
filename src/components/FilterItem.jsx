import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import HandleValueSetter from "../utils/HandleValueSetter";

const FilterItem = ({ label, filterArr, setFilterArr }) => {
  const [checked, setChecked] = useState(false);

  const handleOnCheck = HandleValueSetter;

  const updateCheckedState = () => {
    handleOnCheck(checked, setChecked);
    setChecked(!checked);

    // update checked to true in filterArr

    setFilterArr((current) =>
      current.map((obj) => {
        if (obj.name === label) {
          return { ...obj, checked: !checked };
        }

        return obj;
      })
    );
  };

  return (
    // Render checkbox and handle it's state updates when checked
    <div onClick={() => updateCheckedState()}>
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
