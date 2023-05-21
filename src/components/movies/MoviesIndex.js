import { useState, useEffect } from "react"
import { getAllMovies } from "../../api/fetch";
import {Link} from "react-router-dom"

import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import "./MoviesIndex.css";

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setSearchTitle(title);
    setMovies(result)
  }

  useEffect(() => {
    getAllMovies().then(response => {
      // console.log(response)
      setMovies(response)
      setAllMovies(response)
      setLoadingError(false);
    }) 
    .catch((error) =>{
      console.log(error);
      setLoadingError(true);
    })
  }, [])

  return (
    <div>
      {false ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          
          <div className="button-search">
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
          </div>
          <section className="movies-index">
            {/* <!-- MovieListing components --> */}
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
