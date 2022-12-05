import { useState, useEffect } from "react";

// // create an object from ingredients list as keys that are set to false
const FilterByIngredients = (ingredientsList) => {
  const [filterArr, setFilterArr] = useState();

  useEffect(() => {
    console.log("should update when checked", filterArr);
    let obj = {};
    ingredientsList.forEach((item) => {
      obj[item] = false;
    });

    setFilterArr(obj);
  }, [ingredientsList]);

  return { filterArr, setFilterArr };
};

export default FilterByIngredients;
