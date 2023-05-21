import "./MoviesForm.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateMovie, getOneMovie } from "../../api/fetch";

export default function MoviesForm() {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseDate: "",
    description: "",
    duration: "",
    rating: "",
    country: "",
    language: "",
  });

  let navigate = useNavigate();
  const { id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();
  
    updateMovie(id, movie)
      .then(() => {
        navigate(`/movies/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleTextChange(event) {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value,
    });
  }

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={movie.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={movie.description}
        onChange={handleTextChange}
      />

      <label htmlFor="director">Director:</label>
      <input
        type="text"
        id="director"
        value={movie.director}
        onChange={handleTextChange}
      />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        value={movie.genre}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration:</label>
      <input
        type="text"
        id="duration"
        value={movie.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        value={movie.country}
        onChange={handleTextChange}
      />

      <label htmlFor="language">Language:</label>
      <input
        type="text"
        id="language"
        value={movie.language}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseDate">Release Date:</label>
      <input
        type="text"
        id="releaseDate"
        value={movie.releaseDate}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={movie.rating}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}