import React from "react";

const useTrueIngredients = (filterArr, setTrueIngredients, checked) => {
  let ingredientsArr = [];

  for (let ingredient in filterArr) {
    if (filterArr[ingredient] == true) {
      ingredientsArr.push(ingredient);
    }
  }

  return { ingredientsArr };
};

export default useTrueIngredients;
