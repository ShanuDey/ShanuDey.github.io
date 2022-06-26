import React from "react";
import { Button } from "react-bootstrap";

const Skill = ({ skill }) => {
  const handleButtonClick = () => {
    window.open("https://www.google.com/search?q=" + skill);
  };
  return (
    <Button variant="outline-success" style={{ margin: "2px" }} onClick={handleButtonClick}>
      {skill}
    </Button>
  );
};

export default Skill;
