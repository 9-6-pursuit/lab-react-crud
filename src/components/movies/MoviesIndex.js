/** @format */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";
import "./MoviesIndex.css";
import MovieListing from "./MovieListing";

export default function MoviesIndex() {
	const [movies, setMovies] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");
	useEffect(() => {
		getAllMovies()
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Error");
				}
			})
			.then((data) => {
				setMovies(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	function handleTextChange(event) {
		setSearchTitle(event.target.value);
	}

	return (
		<div>
			{false ? (
				<ErrorMessage />
			) : (
				<section className="movies-index-wrapper">
					<h2>All Movies</h2>
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
					<section className="movies-index">
						{movies
							.filter((movie) =>
								movie.title
									.toLowerCase()
									.includes(searchTitle.toLowerCase())
							)
							.map((movie) => {
								return <MovieListing movie={movie} />;
							})}
					</section>
				</section>
			)}
		</div>
	);
}
