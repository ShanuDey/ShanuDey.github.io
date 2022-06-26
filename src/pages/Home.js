import React from "react";
import Layout from "../components/Layout";
import { Card, Container } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  card: { marginTop: "30vh", border: "none" },
  title: {
    font: "Segoe UI",
    fontSize: "80px",
    color: "#4D7EA8",
  },
  text: {
    font: "Arial",
    fontSize: "30px",
    color: "#666666",
  },
};

const Home = () => {
  return (
    <Layout>
      <Container>
        <Card className="text-center" style={styles.card}>
          <Card.Body>
            <Card.Title style={styles.title}>Hi, I am Shanu</Card.Title>
            <Card.Text style={styles.text}>
              A software developer with a passion for learning and creating.
            </Card.Text>
              <LinkedInIcon fontSize="large" color="primary" onClick={()=> window.open("https://www.linkedin.com/in/shanudey/", "_blank")}/>
              <EmailIcon fontSize="large" color="error" onClick={()=> window.open("mailto:sd4shanudey@gmail.com", "_blank")}/>
              <GitHubIcon fontSize="large" color="neutral" onClick={()=> window.open("https://github.com/ShanuDey", "_blank")}/>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default Home;
