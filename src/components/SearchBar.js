import React from "react";
import debouncer from "../helpers/debouncer";
const SearchBar = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const debouncedHandleChange = debouncer(handleChange);
  return (
    <>
      <label htmlFor="Search">Search </label>
      <input
        type="search"
        id="Search"
        placeholder="Search for an item"
        onChange={(e) => debouncedHandleChange(null, e)}
      />
    </>
  );
};

export default SearchBar;
