import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavouritePage from "./pages/FavouritePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  //Search Bar State
  const [search, setSearch] = useState("");

  useEffect(()=>{
    console.log("Searched: ", search);
  },[search]);

  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Header setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movie/:id" element={<MovieDetailsPage />} />
          <Route exact path="/favourite" element={<FavouritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

export default App;
