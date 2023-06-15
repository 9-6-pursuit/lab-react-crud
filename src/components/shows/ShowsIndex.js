/** @format */

import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";

import "./ShowsIndex.css";
import { useEffect, useState } from "react";
import ShowListing from "./ShowListing";

export default function ShowsIndex() {
	let [shows, setShows] = useState([]);
	let [searchTitle, setSearchTitle] = useState("");
	useEffect(() => {
		getAllShows()
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Error");
				}
			})
			.then((data) => {
				setShows(data);
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
				<section className="shows-index-wrapper">
					<h2>All Shows</h2>
					<button>
						<Link to="/shows/new">Add a new show</Link>
					</button>
					<br />
					<label htmlFor="searchTitle">
						Search Shows:
						<input
							type="text"
							value={searchTitle}
							id="searchTitle"
							onChange={handleTextChange}
						/>
					</label>
					<section className="shows-index">
						{shows
							.filter((showI) =>
								showI.title
									.toLowerCase()
									.includes(searchTitle.toLowerCase())
							)
							.map((show) => {
								return <ShowListing show={show}></ShowListing>;
							})}
					</section>
				</section>
			)}
		</div>
	);
}
