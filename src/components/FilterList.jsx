import React from "react";
import FilterItem from "./FilterItem";

const FilterList = () => {
  return (
    <div>
      <FilterItem name={"alcohol-free"} />
      <FilterItem name={"fragrance & essential oil free"} />
    </div>
  );
};

export default FilterList;
