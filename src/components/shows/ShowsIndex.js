import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllObjects } from "../../api/fetch";

import ShowListing from "../shows/ShowListing";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [allShows, setAllShows] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  function handleTextChange(event) {
    let search = event.target.value;
    setSearchFilter(search);
  }

  useEffect(() => {
    getAllObjects('shows').then(response => {
      setAllShows(response);
      setLoadingError(false);
    })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      })
  }, []);

  return (
    <div>
      {loadingError ? (
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
              onChange={(e) => handleTextChange(e)}
            />
          </label>
          <section className="shows-index">
            {allShows.filter(show => show.title.toLowerCase().includes(searchFilter.toLowerCase())).map(show => {
              return <ShowListing show={show}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
