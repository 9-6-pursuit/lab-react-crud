import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsNewForm from "./components/shows/ShowsNewForm";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex"

// added
import MoviesIndex from "./components/movies/MoviesIndex";
import MovieEditForm from "./components/movies/MovieEditForm";
import MoviesNewForm from "./components/movies/MoviesNewForm";
import Movie from "./components/movies/Movie"

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />


<Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/:id/edit" element={<MovieEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
