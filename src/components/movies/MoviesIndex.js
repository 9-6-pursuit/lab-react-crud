import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllObjects } from "../../api/fetch";

import MovieListing from "../movies/MovieListing"
import ErrorMessage from "../errors/ErrorMessage";

import "../shows/ShowsIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  function handleTextChange(event) {
    let search = event.target.value;
    setSearchFilter(search);
  }

  useEffect(() => {
    getAllObjects('movies').then(response => {
      setAllMovies(response);
      setLoadingError(false);
    })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      })
  }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              onChange={(e) => handleTextChange(e)}
            />
          </label>
          <section className="shows-index">
            {allMovies.filter(movie => movie.title.toLowerCase().includes(searchFilter.toLowerCase())).map(movie => {
              return <MovieListing movie={movie}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
