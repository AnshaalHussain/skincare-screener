import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        onChange={(e) => onChange(e)}
        value={inputText}
        placeholder={"enter a product name"}
      />
    </div>
  );
};

export default Input;
