const link = process.env.REACT_APP_API_BASE_URL

// objectType => movie || show
// type => 'movies' || 'shows' (api path)
// id => unique key for each object

// Shows

// Create
export function createObject(objectType, type) {
  const options = {
    method: 'POST',
    body: JSON.stringify(objectType),
    headers: {'Content-Type': 'application/json'},
  }
  return fetch(`${link}/${type}`, options)
  .then(response => response.json());
}

// Delete
export function destroyObject(type, id) {
  const options = {method: 'DELETE'}
  return fetch(`${link}/${type}/${id}`, options);
}

// Index/Get all
export async function getAllObjects(type) {
  return fetch(`${link}/${type}`)
  .then((response) => response.json());
}

// Show/Get one
export function getOneObject(type, id) {
  return fetch(`${link}/${type}/${id}`).then((response) => response.json());
}

// Update
export function updateObject(objectType, type, id) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(objectType),
    headers: {'Content-Type': 'application/json'},
  }
  return fetch(`${link}/${type}/${id}`, options)
  .then(response => response.json());
}
