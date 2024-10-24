import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({setSearch}) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src="/assets/imgs/favicon.png" />
            <Link to="/">Movie Explorer</Link>
          </li>
          <li>
            <SearchBar setSearch = {setSearch}/>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
