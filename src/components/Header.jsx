import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { GlobalContext } from "../context/GlobalContext";

const Header = ({ setSearch }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <header>
      <nav>
        <ul className="flex items-center p-2 justify-between bg-black text-white">
          <li className="flex gap-1 items-center">
            <img className="h-8 w-8" src="/assets/imgs/favicon.png" />
            <Link className="font-bold" to="/">
              Movie Explorer
            </Link>
          </li>
          <li>
            <SearchBar setSearch={setSearch} />
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
          <li>
            <button onClick={() => globalContext.setDarkMode(true)}>
              Turn On Dark Mode
            </button>
          </li>
          <li>
            <button onClick={() => globalContext.setDarkMode(false)}>
              Turn Off Dark Mode
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
