import {Link} from  "react-router-dom";
import { useEffect, useState } from "react";

import { getAllMovies } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";

import MovieListing from "./MovieListing";
function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(event){
    const title=event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setSearchTitle(title);
    setMovies(result);
  }

  useEffect(() => {
    getAllMovies().then((response)=>{
      setAllMovies(response);
      console.log("result is", response)
      setMovies(response);
      setLoadingError(false);
    })
  }, [])

  return (
  <div className="movies">
       {false ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            <span>Search Movies: </span>
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index shows-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
  </div>
  )
}
