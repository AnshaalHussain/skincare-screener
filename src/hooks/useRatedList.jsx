import { useState, useEffect } from "react";
import ProductCards from "../components/ProductCards";

const useRatedList = (productsData, ingredientsArr) => {
  const [ratedList, setRatedList] = useState([]);

  useEffect(() => {
    const ratedListArr =
      productsData &&
      productsData.map((product) => {
        let ingredientsFound = 0;
        for (let item in ingredientsArr) {
          if (
            product.ingredients.includes(ingredientsArr[item]) ||
            product.ingredients.includes(ingredientsArr[item] + ",")
          ) {
            ingredientsFound += 1;
          }
        }
        for (let item in ingredientsArr) {
          if (
            product.highlights.includes(ingredientsArr[item]) ||
            product.highlights.includes(ingredientsArr[item] + ",")
          ) {
            ingredientsFound += 1;
          }
        }

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
  }, [ingredientsArr]);

  return { ratedList };
};

export default useRatedList;
