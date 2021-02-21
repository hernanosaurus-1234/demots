import React from "react";
import { Movie } from "../../dataTypes";

function MovieCard(props: { movie: Movie }) {
  const { movie } = props;
  return (
    <div>
      <img
        alt="poster_image"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <h2> {movie.title} </h2>
      <p> {movie.overview} </p>
    </div>
  );
}

export default MovieCard;
