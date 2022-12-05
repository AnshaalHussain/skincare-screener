import { useState, useEffect } from "react";

const useTrueIngredients = (filterArr) => {
  const [ingredientsArr, setIngredientsArr] = useState([]);

  useEffect(() => {
    let newIngredientsArr = [];
    for (let ingredient in filterArr) {
      if (filterArr[ingredient].checked === true) {
        newIngredientsArr.push(filterArr[ingredient].name);

        setIngredientsArr(newIngredientsArr);
      }
    }
  }, [filterArr]);

  return { ingredientsArr };
};

export default useTrueIngredients;
