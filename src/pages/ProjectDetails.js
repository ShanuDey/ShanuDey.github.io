import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import SkillList from "../components/SkillList";
import MyProjects from "../data/MyProjects";

const ProjectDetails = () => {
  const {name } =useParams();
  const project = MyProjects.find(proj => proj.name === name);

  return (
    <Layout>
      <Container>
        <Card className="text-center" style={{ marginTop: "20px" }}>
          <Card.Img variant="top" src={"/"+project.image} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <SkillList skills={project.skills}/>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button
              variant="text"
              onClick={() => window.open(project.sourceCode, "_blank")}
            >
              Source Code
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </Layout>
  );
};

export default ProjectDetails;
