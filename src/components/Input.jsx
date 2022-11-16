import { useState, useEffect } from "react";
import axios from "axios";
import queries from "../services/queries/queries";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    console.log("responseData", responseData);
  }, [responseData]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  // GET
  const onSubmit = (e) => {
    e.preventDefault();

    queries
      .getHomePage()
      .then((res) => {
        console.log("res GET", res);
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // POST
  const onSendText = (e) => {
    e.preventDefault();
    queries
      .postHomeRoute(inputText)
      .then((res) => {
        console.log("res POST", res);
        setResponseData(res.data);
        setInputText("");
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
      <button onClick={(e) => onSubmit(e)}>Fetch Data</button>
      <button onClick={(e) => onSendText(e)}>Send Data</button>
      <div> {responseData ? <p>Response for: {responseData} </p> : null}</div>
    </div>
  );
};

export default Input;
