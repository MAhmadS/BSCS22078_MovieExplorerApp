import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-full p-4 flex items-center justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2024 {""}
          <Link to="https://flowbite.com/" className="hover:underline">
            MovieExplorer™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white">
          <li>
            <Link to="/favourite" className="hover:underline me-4 md:me-6">
              Favourites
            </Link>
            <Link to="#" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
