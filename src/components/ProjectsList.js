import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Project from "./Project";

const ProjectsList = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3000/projects.json')
        .then(response=> response.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err.message));
    }, []);    

  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((project, key) => (
        <Col>
          <Project key={key} data={project} />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsList;
