import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";
import { v4 as uuidv4 } from "uuid";
import MyProjects from "../data/MyProjects";

const ProjectsList = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {MyProjects.map((data) => (
        <Col>
          <Project key={uuidv4()} data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
