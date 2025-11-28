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
  const [show, setShow] = useState(false);

  // Sync movies to localStorage whenever movies changes
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    console.log("Movie added: ", movie);

    setMovies((prev) => [...prev, movie]);
  };

  const deleteMovie = (movie) => {
    setMovies((prev) => prev.filter((m) => m.title !== movie.title));
  };

  const searchMovies = (title, rating) => {
    const allMovies = JSON.parse(localStorage.getItem("movies")) || [];

    const filtered = allMovies.filter(
      (m) =>
        m.title.toLowerCase().includes(title.toLowerCase()) &&
        m.rating >= rating
    );

    setMovies(filtered);
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

        <MovieList movies={movies} onDelete={deleteMovie} />
      </div>

      <Footer />
    </>
  );
}

export default App;
