

const URL = process.env.REACT_APP_API_BASE_URL;
// Shows

// src/api/fetch.js
// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/`, options).then((response) => {
    return response.json();
  });
}

// src/api/fetch.js

export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/`, options).then((response) => {
    return response.json();
  });
}

// src/api/fetch.js
// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Delete a movie
export function destroyMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}


// Index/Get all
export function getAllShows() {
  return fetch (`${URL}/shows`).then((response) => response.json());
}

// src/api/fetch.js
// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Get one movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}


// src/api/fetch.js
// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((response) => {
    return response.json();
  });
}

// Update a movie
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, options).then((response) => {
    return response.json();
  });
}


// Movies

// Get all movies
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}


