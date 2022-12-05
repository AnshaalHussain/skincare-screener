import { useState } from "react";

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
      <input
        value={inputFieldValue}
        onChange={(e) => setInputFieldValue(e.target.value)}
        placeholder={"enter an ingredient"}
      />
      <button onClick={() => handleOnClick()}>Add</button>
    </div>
  );
};

export default FilterInput;
