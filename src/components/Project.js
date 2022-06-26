import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Project = ({ data }) => {
  let navigate = useNavigate();
  return (
    <Card border="primary">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description.slice(0, 100)} ...</Card.Text>
        <Button
          variant="text"
          onClick={() =>
            navigate(`/projects/${data.name}` )
          }
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
