const baseUrl = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create
export function createShow(show) {
  return fetch(`${baseUrl}/shows`, {
    method: 'POST',
    body: JSON.stringify(show),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Delete
export function destroyShow(id) {
  return fetch(`${baseUrl}/shows/${id}`, {
    method: 'DELETE'
  });
}

// Index/Get all
export function getAllShows() {
  return fetch(`${baseUrl}/shows`);
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${baseUrl}/shows/${id}`);
}

// Update
export function updateShow(id, show) {
  return fetch(`${baseUrl}/shows/${id}`, {
    method: 'PUT',
    body: JSON.stringify(show),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Movies

// Create
export function createMovies(movie) {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Delete
export function destroyMovies(id) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE'
  });
}

// Index/Get all
export function getAllMovies() {
  return fetch(`${baseUrl}/movies`);
}

// Show/Get one
export function getOneMovies(id) {
  return fetch(`${baseUrl}/movies/${id}`);
}

// Update
export function updateMovies(id, movie) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'PUT',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}