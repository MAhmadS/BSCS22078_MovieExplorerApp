import React from 'react'
import MovieList from '../components/MovieList'

const HomePage = ({moviesList, addToFav}) => {
  return (
    <MovieList moviesList={moviesList} addToFav={addToFav} />
  )
}

export default HomePage