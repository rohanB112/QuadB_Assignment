import React, { useState } from "react";
import Header from "./Header";
import { useEffect } from "react";
import { API_LINK } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieContainer = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(API_LINK);
    const json = await data.json();
    setMovieData(json);
    // console.log(movieData);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        {movieData &&
          movieData?.map((movie) => {
            return <MovieCard info={movie} key={movie.show.id} />;
          })}
      </div>
    </div>
  );
};

export default MovieContainer;
