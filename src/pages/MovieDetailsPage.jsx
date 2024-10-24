import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = ({ moviesList }) => {
  const { title } = useParams();
  const movie = moviesList.filter((movieItem) => movieItem.Title === title)[0];
  console.log(movie);
  return (
    <div className="grid justify-center grid-cols-[1fr_1fr] gap-20 p-5">
      <div className="bg-black shadow-lg shadow-gray-500 flex flex-col items-center py-20 text-white">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="flex flex-col justify-center">
        <div className=" font-bold text-3xl">Title:  {movie.Title}</div>
        <div>Genre: {movie.Genre}</div>
        <div>Year of Release: {movie.Year}</div>
        <div>RunTime: {movie.Genre}</div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
