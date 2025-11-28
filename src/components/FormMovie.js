import { Form, Card, Button } from "react-bootstrap";

const FormMovie = ({ onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target.formPosterUrl.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const movie = {
        title: e.target.formTitle.value,
        description: e.target.formDescription.value,
        posterUrl: reader.result,
        rating: parseFloat(e.target.formRating.value),
      };

      onSave(movie);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="container z-1 d-flex justify-content-center position-absolute">
        <Card className="mt-4 mb-4" style={{ width: "450px" }}>
          <Card.Header style={{fontSize:"20px"}}>Add movie</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter movie title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter movie description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPosterUrl">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control type="file" placeholder="Enter poster URL" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  placeholder="Enter movie rating"
                />
              </Form.Group>

              <Button variant="success" type="submit" className="float-end">
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default FormMovie;
