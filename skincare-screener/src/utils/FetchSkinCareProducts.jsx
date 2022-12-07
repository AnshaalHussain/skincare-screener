import { useState, useEffect } from "react";
import axios from "axios";

export const GetSkinCareProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.post(url + "/data", {
      headers: { "Content-Type": "application/json" },
      message: text,
    });
  };

  return <div></div>;
};
