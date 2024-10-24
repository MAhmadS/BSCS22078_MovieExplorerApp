import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const MovieList = ({ moviesList, addToFav }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <div>
      <ul className={`grid gap-5 justify-center p-5 ${globalContext.darkMode ? "bg-black text-white": ""}`} style={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}>
        {moviesList.map((movie, index) => (
          <li className={`${globalContext.darkMode ? " border p-1 border-white": ""}`} key={index}>
            <Link to={`/movie/${movie.Title}`}>
              <img src={movie.Poster} alt={movie.Title}/>
            </Link>
              <div className="font-bold text-2xl">{movie.Title}</div>
              <div>{movie.Genre}</div>
              <div>{movie.Year}</div>
              <div className="text-sm">{movie.Runtime}</div>
              {addToFav && <button className={`border px-2 mx-2 my-1 ${globalContext.darkMode ? " border-white": "border-black"}`} onClick={() => addToFav(movie)}>Add To Favourites</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
