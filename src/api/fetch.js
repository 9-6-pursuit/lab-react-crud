const URL = process.env.REACT_APP_API_BASE_URL;
// Shows

// Create
export function createShow(show) {
  return;
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
export function updateShow(id, show) {
  return;
}

// Movies

export async function getAllMovies() {
  const response = await fetch(`${URL}/movies`);
  return await response.json();
}
