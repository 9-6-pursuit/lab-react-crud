import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { getAllShows } from "../../api/fetch"

import ErrorMessage from "../errors/ErrorMessage";

import ShowListing from "./ShowListing"

import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])
  const [allShows, setAllShows] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title, allShows) : allShows;
    setSearchTitle(title)
    setShows(result)
  }


  useEffect(() => {
    
    getAllShows().then((response)=>{
      setShows(response)
    }).catch((error)=> {
        console.error(error)
    })
    .catch((error)=>{
      console.error(error)
      cons
    })
  }, [])


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
              // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
            {shows.map((show) =>{
              return <ShowListing key = {show.id} show = {show} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}
