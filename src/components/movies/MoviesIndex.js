import MovieListing from "./MovieListing"

import { getAllMovies } from "../../api/fetch";

import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";

import "./MoviesIndex.css";
import { useState, useEffect } from "react";

function filterMovies(search, movies){
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setSearchTitle(title);
    setMovies(result)
  }


  useEffect(() => {
    getAllMovies().then((response) => {
      setMovies(response);
      setAllMovies(response)
      setLoadingError(false);
    }).catch((error) => {
      console.error(error);
      setLoadingError(true);
    })
  }, [])

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <!-- ShowListing components --> */}
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
