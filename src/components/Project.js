import React from "react";
import { Card, Button } from "react-bootstrap";

const Project = ({data}) => {
  return (
    <Card border="primary">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description.slice(0, 100)} ...
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
