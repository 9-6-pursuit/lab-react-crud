const URL = process.env.REACT_APP_API_BASE_URL;

// Shows
// Create
export async function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${URL}/shows/`, options);
  return await response.json();
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export async function getAllShows() {
  const response = await fetch(`${URL}/shows`);
  return await response.json();
}

// Show/Get one
export async function getOneShow(id) {
  const response = await fetch(`${URL}/shows/${id}`);
  return await response.json();
}

// Update
export async function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${URL}/shows/${id}`, options);
  return await response.json();
}

// Movies
export async function getAllMovies() {
  const response = await fetch(`${URL}/movies`);
  return await response.json();
}

// Movie/Get one
export async function getOneMovie(id) {
  const response = await fetch(`${URL}/movies/${id}`);
  return await response.json();
}

// Create
export async function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${URL}/movies/`, options);
  return await response.json();
}

// Update
export async function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${URL}/movies/${id}`, options);
  return await response.json();
}

// Delete
export function destroyMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}
