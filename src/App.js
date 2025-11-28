import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import FormMovie from "./components/FormMovie";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });

  const [filteredMovies, setFilteredMovies] = useState([]);

  const [show, setShow] = useState(false);

  // Sync movies to localStorage whenever movies changes
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const addMovie = (movie) => {
    console.log("Movie added: ", movie);

    setMovies((prev) => [...prev, movie]);
  };

  const deleteMovie = (movie) => {
    setMovies((prev) => prev.filter((m) => m.title !== movie.title));
  };

  const searchMovies = (title, rating) => {
    const minRating = rating ? parseFloat(rating) : 0;
    const filtered = movies.filter(
      (m) =>
        m.title.toLowerCase().includes(title.toLowerCase()) &&
        m.rating >= minRating
    );

    setFilteredMovies(filtered);
  };

  return (
    <>
      <Header firstname="Sylvestre" onSearch={searchMovies} />

      {/* Conditional rendering of FormMovie when clicking on the button */}

      <div className="container">
        <Button className="mt-3" onClick={() => setShow(!show)}>
          Add movie
        </Button>

        {show && <FormMovie onSave={addMovie} />}

        <MovieList movies={filteredMovies} onDelete={deleteMovie} />
      </div>

      <Footer />
    </>
  );
}

export default App;
