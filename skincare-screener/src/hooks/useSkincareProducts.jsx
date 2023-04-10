import axios from "axios";
import { useState, useEffect } from "react";

export const useSkincareProducts = (
  text,
  setSubmitText,
  loading,
  setLoading
) => {
  const [products, setProducts] = useState([]);
  // const url = process.env.REACT_APP_API_URL;
  const url = "http://127.0.0.1:5000";
  console.log("URL", url);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.post(url + "/data", {
      headers: { "Content-Type": "application/json" },
      message: text,
    });

    setLoading(false);

    // POST results returns an object with key "data" and the data array as it's value, must access data through ```response.data.data```
    // ex. {"data": results_arr}
    if (response && response.data) setProducts(response.data.data);
  };

  useEffect(() => {
    let newText = text.trim();
    if (newText) {
      fetchProducts();
      // setSubmitText("");
    }
  }, [text]);

  return { products };
};
