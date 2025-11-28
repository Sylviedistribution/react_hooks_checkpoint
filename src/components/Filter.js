import { Form, Col, Button, Row } from "react-bootstrap";

const Filter = ({onSearch}) => {
  return (
    <Form onSubmit={onSearch} className="d-flex">
      <Row>
        <Col xs="auto">
          <Form.Control type="text" placeholder="Title" className="mr-sm-2" />
        </Col>
        <Col xs="auto">
          <Form.Control
            type="number"
            placeholder="Rating"
            min="1"
            max="5"
            step="0.1"
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
