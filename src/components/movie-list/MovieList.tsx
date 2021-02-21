import React from "react";
import { Movie } from "../../dataTypes";
import MovieCard from "../movie-card/MovieCard";

function MovieList(props: { movies: Movie[] }) {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
