import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { getAllShows } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing"
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [shows, setShows] = useState([])
  useEffect(() => {
    getAllShows().then(response => {
      console.log(response)
      setShows(response)
    }) 
  }, [])

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
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
