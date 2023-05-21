import { useState, useEffect } from "react"
import { getAllMovies } from "../../api/fetch";
import {Link} from "react-router-dom"
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getAllMovies().then(response => {
      console.log(response)
      setMovies(response)
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
                // value={searchTitle}
                id="searchTitle"
                // onChange={handleTextChange}
              />
            </label>
          </div>
          <section className="movie-index">
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
