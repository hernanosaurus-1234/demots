import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Movie, emptyMovie } from "./dataTypes";
import "./App.css";
import MovieList from "./components/movie-list/MovieList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [movieList, setMovieList] = React.useState<Movie[]>(() => [emptyMovie]);
  const [searchField, setSearchField] = React.useState<string>("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=65bb489f9f15c9abdee68c2c6ba21a39"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
      });

    return () => {
      setMovieList(() => [emptyMovie]);
    };
  }, []);

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SearchBox onSearchChange={onSearchChange} />
        <MovieList movies={filteredMovies} />
      </header>
    </div>
  );
}

export default App;
