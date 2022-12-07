import axios from "axios";
import { useState, useEffect } from "react";

export const useSkincareProducts = (
  text,
  setSubmitText,
  loading,
  setLoading
) => {
  const [products, setProducts] = useState([]);
  const url = "http://127.0.0.1:5000";

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.post(url + "/data", {
      headers: { "Content-Type": "application/json" },
      message: text,
    });

    setLoading(false);

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    let newText = text.trim();
    if (newText) {
      fetchProducts();
      setSubmitText("");
    }
  }, [text]);

  return { products };
};
