import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import FormMovie from "./components/FormMovie";
import { useState } from "react";
import { Button } from "react-bootstrap";


function App() {
  const [movies, setMovies] = useState(()=>{
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });
  const [show, setShow] = useState(false);

  const addMovie = (movie) => {
    console.log("Movie added: ", movie);
    const updated = [...movies, movie];
    setMovies(updated);
    localStorage.setItem("movies", JSON.stringify(updated));
  };

  const deleteMovie = (movie) =>{
    const updated = movies.filter((m)=>m.title !== movie.title);
    setMovies(updated);
    localStorage.setItem("movies", JSON.stringify(updated));
  }

  const searchMovies = (title, rating) => {
    const moviesArray = JSON.parse(localStorage.getItem("movies"));
    const filtered = moviesArray.filter(
      (m) =>
        m.title.toLowerCase().includes(title.toLowerCase()) &&
        m.rating >= rating
    );

    console.log("Filtered movies: ", filtered);
    setMovies(filtered);
  };

  return (
    <>
      <Header firstname="Sylvestre" onSearch={searchMovies} />

      <div className="container">
        <Button className="mt-3" onClick={() => setShow(!show)}>
          Add movie
        </Button>

        {show && <FormMovie onSave={addMovie} />}

        <MovieList movies={movies} onDelete={deleteMovie}/>
      </div>

      <Footer />
    </>
  );
}

export default App;
