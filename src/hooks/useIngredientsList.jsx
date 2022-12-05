import { useState, useEffect } from "react";
import FilteringState from "../utils/FilterByIngredients";

const useIngredientsList = ({ ingredientsList, setFilterArr }) => {
  useEffect(() => {
    console.log("ingredientsList was changed");
    // create an object from ingredients list as keys that are set to false
    const { filterObj } = FilteringState(ingredientsList);

    setFilterArr(filterObj);
  }, [ingredientsList]);
};
export default useIngredientsList;
