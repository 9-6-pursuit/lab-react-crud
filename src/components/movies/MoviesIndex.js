import { getAllMovies } from "../../api/fetch";



useEffect(() => {
  getAllMovies().then((response) => {
    getAllMovies(response);
  })
    .catch((error) => {
      console.error(error);
    });
}, []);




export default function MoviesIndex() {
  return <p>Movie List</p>;
}
