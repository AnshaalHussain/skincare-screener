import axios from "axios";
import { useState, useEffect } from "react";

export const useSkincareProducts = (text, setLoading) => {
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_PROD_API_URL;

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.post(url + "/data", {
      headers: { "Content-Type": "application/json" },
      message: "canmake uv gel",
    });

    setLoading(false);

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    let newText = "canmake uv gel";
    // if (text) {
    //   newText = text.trim();
    // }

    if ((newText = "canmake uv gel")) {
      fetchProducts();
    }
  }, [text]);

  return { products };
};
