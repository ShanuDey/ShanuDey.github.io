import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
  return (
    <Layout>
      <Container style={{marginTop: '20px'}}>
        <ProjectsList/>
      </Container>
    </Layout>
  );
};

export default Projects;
