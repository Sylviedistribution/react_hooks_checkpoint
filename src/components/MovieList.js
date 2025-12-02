import MovieCard from "./MovieCard";

const MovieList = ({ movies, onDelete }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      {/*With the map function display all the movies in cards */}
      {movies.map((Movie, index) => (
        <MovieCard key={index} movie={Movie} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MovieList;
