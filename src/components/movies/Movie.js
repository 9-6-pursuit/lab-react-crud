import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./Movie.css";

import ErrorMessage from "../errors/ErrorMessage";

import { getOneMovie, destroyMovie } from "../../api/fetch";

function Movie() {
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();

  // Execute the following code when the 'id' dependency changes
  useEffect(() => {
    // Call the 'getOneMovie' function with the provided 'id'
    getOneMovie(id)
      .then((response) => {// Set the 'response' as the 'movie' state
        setMovie(response);
        // If the 'response' object is empty
        if (Object.keys(response).length === 0) {
          setLoadingError(true);//set 'loadingError' to true
        } else {
          setLoadingError(false);
        }
      })
      // If there is an error, set 'loadingError' to true
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);
  // useEffect should only be executed if the value of id changes.The code inside the useEffect hook will run.

  function handleDelete() {
    destroyMovie(id)
      .then(() => navigate("/movies"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  return (
    <section className="movies-show-wrapper">
      <h2>{movie.title}</h2>
      <section className="movies-show">
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
                Remove show
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Movie;
