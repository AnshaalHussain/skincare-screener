import React from "react";

const FilteringState = (ingredientList) => {
  let obj = {};
  ingredientList.map((item) => {
    obj[item] = false;
  });

  return obj;
};

export default FilteringState;
