import React from "react";
import MovieList from "../components/MovieList";

const FavouritePage = ({ favList }) => {
  if (favList.length === 0) {
    return <div className="h-screen text-center p-5">No Favourites</div>;
  } else {
    return <MovieList moviesList={favList} />;
  }
};

export default FavouritePage;
