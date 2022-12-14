import axios from "axios";
import { useState, useEffect } from "react";

export const useSkincareProducts = (text, setLoading) => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_API_URL;

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
    }
  }, [text]);

  return { products };
};
