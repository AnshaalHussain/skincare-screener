import axios from "axios";
import { useState, useEffect } from "react";

export const useSkincareProducts = (text) => {
  const [products, setProducts] = useState([]);
  const url = "http://127.0.0.1:5000";

  const fetchProducts = async () => {
    const response = await axios.post(url + "/data", {
      headers: { "Content-Type": "application/json" },
      message: text,
    });

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    if (text) {
      fetchProducts();
    }
  }, [text]);

  return { products };
};
