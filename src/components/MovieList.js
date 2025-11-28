import MovieCard from "./MovieCard";


 const MovieList = ({movies, onDelete}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      {movies.map((Movie, index) => (
        <MovieCard key={index} movie={Movie} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default MovieList;
