import { useState, useEffect } from "react";
import { getOneMovie } from "../../api/fetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteMovie } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";


import "./Movie.css"

function Movie() {
    const [movie, setMovie] = useState({})
    const [loadingError, setLoadingError] = useState(false)
    
    const navigate = useNavigate
    const {id} = useParams()

    function handleDelete() {
        deleteMovie(id)
          .then(() => navigate("/movies"))
          .catch((error) => {
            console.error(error);
            setLoadingError(true);
        });
    }

    useEffect(() => {
        getOneMovie(id)
        .then((response) => {
         setMovie(response)
         if (Object.keys(response).length === 0) {
            setLoadingError(true);
          } else {
            setLoadingError(false);
          }
        }).catch((error) => {
         console.log(error);
         setLoadingError(true)
        })
    },[id]);



    return (
        <section className="movies-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="movies-movie">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
    )
}

export default Movie;