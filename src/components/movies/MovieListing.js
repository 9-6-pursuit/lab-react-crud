import { Link } from "react-router-dom";
import "../shows/ShowListing.css";

export default function ShowListing({ movie }) {
  return (
    <article className="movie show">
      <h3 className="title">
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </h3>
      <p className="description">{movie.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {movie.listedIn}
        </p>
        <p>
          <span>Duration:</span> {movie.duration}
        </p>
      </aside>
    </article>
  );
}