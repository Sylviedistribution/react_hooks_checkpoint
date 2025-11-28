import { Card, Image } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

const MovieCard = ({ movie, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      onDelete(movie);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Image variant="top" src={movie.posterUrl} height={"300px"} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>Rating: {movie.rating} / 5</Card.Text>
        <div
          style={{ height: "20px", display: "flex", justifyContent: "center" }}
        >
          <TrashFill
            style={{
              cursor: "pointer",
              color: "red",
              fontSize: "20px",
            }}
            onClick={() => handleDelete(movie)}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
