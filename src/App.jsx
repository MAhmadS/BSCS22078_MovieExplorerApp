import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavouritePage from "./pages/FavouritePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext";

const moviesList = [
  {
    Title: "1",
    Year: "1931",
    Runtime: "99 min",
    Genre: "Crime, Mystery, Thriller",
  },
  {
    Title: "2",
    Year: "1931",
    Runtime: "99 min",
    Genre: "Crime, Mystery, Thriller",
  },
  {
    Title: "3",
    Year: "1931",
    Runtime: "99 min",
    Genre: "Crime, Mystery, Thriller",
  },
  {
    Title: "4",
    Year: "1931",
    Runtime: "99 min",
    Genre: "Crime, Mystery, Thriller",
  },
  {
    Title: "5",
    Year: "1931",
    Runtime: "99 min",
    Genre: "Crime, Mystery, Thriller",
  },
];
const App = () => {
  //Search Bar State
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Searched: ", search);
  }, [search]);

  //movie List State
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setMovieList(movieList);
  }, []);

  //dark mode
  const [darkMode, setDarkMode] = useState(false);

  //fav list
  const [favList, setFavList] = useState([]);
  const addToFav = (movie) => {
    setFavList([...favList, movie]);
  };

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <Header setSearch={setSearch} />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage moviesList={moviesList} addToFav={addToFav} />}
          />
          <Route exact path="/movie/:id" element={<MovieDetailsPage />} />
          <Route exact path="/favourite" element={<FavouritePage favList={favList} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

export default App;
