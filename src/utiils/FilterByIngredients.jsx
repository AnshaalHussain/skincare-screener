import React from "react";

const FilteringState = (ingredientList, filterArr) => {
  ingredientList.map((item) => {
    filterArr[item] = false;
  });
};

export default FilteringState;
