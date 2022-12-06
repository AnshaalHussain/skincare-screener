import { useState, useEffect } from "react";
import ProductCards from "../components/ProductCards";
import setTitleCase from "../utils/setTitleCase";

const useRatedList = (productsData, ingredientsArr, filterArr) => {
  const [ratedList, setRatedList] = useState([]);

  // TO DO: the rating logic here can utilize helper functions some more

  useEffect(() => {
    const ratedListArr =
      productsData &&
      productsData.map((product) => {
        let ingredientsFound = 0;

        // calculate how many product ingredients match the filters

        for (let item in ingredientsArr) {
          let ingredientItem = ingredientsArr[item];

          // First, need to make sure any inputted data is reformatted to TITLE CASE to ensure they can be found with .includes() when comparing it with the fetched product ingredients, as that is how the fetched product data is formatted.

          if (
            ingredientItem != "alcohol-free" &&
            ingredientItem != "fragrance-free"
          ) {
            ingredientItem = setTitleCase(ingredientItem);
          }

          if (
            product.ingredients.includes(ingredientItem) ||
            product.ingredients.includes(ingredientItem + ",")
          ) {
            ingredientsFound += 1;
          }
        }

        // calculate how many "highlights" match the filters (alcohol and fragrance free)

        let highlightsList = [];

        for (let ingredient in product.highlights) {
          let ingredientItem = product.highlights[ingredient];
          let slicedString = ingredientItem.slice(1);

          if (slicedString.includes("& essentialoil-free")) {
            slicedString = "fragrance-free";
          }
          highlightsList.push(slicedString);
        }

        if (highlightsList.length > 0) {
          for (let item in ingredientsArr) {
            if (highlightsList.includes(ingredientsArr[item])) {
              ingredientsFound += 1;
            }
          }
        }

        // calculate rating percentage based on filters

        let filteredRating;

        if (ingredientsFound === 0 && ingredientsArr.length > 0) {
          filteredRating = 0;
        } else {
          filteredRating = (ingredientsFound / ingredientsArr.length) * 100;
        }

        return (
          <ProductCards
            title={product.title}
            image={product.product_img}
            rating={Math.round(filteredRating) || 0}
            url={product.url}
          />
        );
      });

    setRatedList(ratedListArr);
  }, [ingredientsArr, productsData, filterArr]);

  return { ratedList };
};

export default useRatedList;
