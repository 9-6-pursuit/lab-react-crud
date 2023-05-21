import { useState } from "react";
import { createMovie } from "../../api/fetch";
import "./MoviesForm.css";
import { useNavigate } from "react-router-dom";

export default function MoviesForm() {
  const [movie, setMovie] = useState({
    genre: "",
    title: "",
    country: "",
    dateAdded: "",
    plot: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  let navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
    createMovie(movie)
      .then((response) => {
        navigate(`/movies/${response.id}`);
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={movie.title}
        onChange={handleTextChange}
      />

      <label htmlFor="plot">Plot:</label>
      <input
        type="text"
        id="plot"
        value={movie.plot}
        onChange={handleTextChange}
      />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        value={movie.genre}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={movie.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in:</label>
      <input
        type="text"
        id="listedIn"
        value={movie.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration:</label>
      <input
        type="text"
        id="duration"
        value={movie.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        type="text"
        id="releaseYear"
        value={movie.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        value={movie.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={movie.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}
