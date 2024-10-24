import React, { useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    
    //updating App.jsx search state
    setSearch(searchText);

    setSearchText("");
  };

  return (
    <form onSubmit={searchHandler}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
