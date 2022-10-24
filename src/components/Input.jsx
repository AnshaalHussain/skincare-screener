import { useState, useEffect } from "react";
import axios from "axios";
import queries from "../services/queries/queries";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    queries
      .getHomePage()
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onSendText = (e) => {
    e.preventDefault();

    queries
      .postHomeRoute(inputText)
      .then((res) => {
        console.log("post res", res.data);
        setResponseData(res.data);
        setInputText("");
        console.log("responseData", responseData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <input
        onChange={(e) => onChange(e)}
        value={inputText}
        placeholder={"enter a product name"}
      />
      <button onClick={(e) => onSubmit(e)}>Send</button>
      <button onClick={(e) => onSendText(e)}>Send Text</button>
      <h1>{responseData || "none"}</h1>
    </div>
  );
};

export default Input;
