import { useEffect, useState } from "react";
import { destroyMovie, getOneMovie } from "../../api/fetch";
import { Link, useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import "./MovieShow.css";

function Movie() {
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();

  let navigate = useNavigate();

  function handleDelete() {
    destroyMovie(id)
      .then(() => navigate("/movies"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response);
        if (Object.keys(response).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);


  return (
    <section className="movie-show-wrapper">
      <h2>{movie.title}</h2>
      <section className="movie-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Genre:</span> {movie.genre}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Release Date:</span> {movie.releaseDate}
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
  );
}

export default Movie;
