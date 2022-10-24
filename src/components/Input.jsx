import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState("");

  const url = "http://127.0.0.1:5000";

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setInputText("");

    const res = await axios
      .get(url)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setResponseData(res);
  };

  return (
    <div>
      <input
        onChange={(e) => onChange(e)}
        value={inputText}
        placeholder={"enter a product name"}
      />
      <button onClick={(e) => onSubmit(e)}>Send</button>
    </div>
  );
};

export default Input;
