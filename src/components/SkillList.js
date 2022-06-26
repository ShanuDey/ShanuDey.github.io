import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import { v4 as uuidv4 } from "uuid";

const SkillList = ({ skills }) => {
  const [skillsArray, setSkillsArray] = useState([]);
  useEffect(() => {
    if (skills) setSkillsArray(skills.split(","));
  }, []);

  return (
    <>
      <strong>{skills && "Skills: "}</strong>
      {skillsArray.map((skill) => (
        <Skill key={uuidv4()} skill={skill} />
      ))}
    </>
  );
};

export default SkillList;
