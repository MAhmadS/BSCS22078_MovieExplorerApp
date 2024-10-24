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
    <form className="flex items-center gap-1" onSubmit={searchHandler}>
      <input
      className="p-0.5 text-black"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="p-0.5 border-white border" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
