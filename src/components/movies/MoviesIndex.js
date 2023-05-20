import { getAllMovies } from "../../api/fetch";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import MovieListing from "./MovieListing";
import ErrorMessage from "../errors/ErrorMessage";

import "./MovieIndex.css"

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase())
  });
}


export default function MoviesIndex() {
  const [movies, setMovies] = useState([])
  const [loadingError, setLoadingError] = useState(false)
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(event) {
    const title = event.target.value
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setSearchTitle(title);
    setMovies(result)
  }

  useEffect(() => {
    getAllMovies().then((response) => {
      // console.log(response);
      setMovies(response)
      setAllMovies(response)
      setLoadingError(false)
    }).catch((error) => {
      console.log(error)
      setLoadingError(true)
    })
  },[])
   
  
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All movies</h2>
          <button>
            <Link to="/movies/new">Add a new show</Link>
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
            {movies.map(movie => {
            return <MovieListing movie={movie} key={movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
    );
}
