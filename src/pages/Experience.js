import React from "react";
import Layout from "../components/Layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Container } from "react-bootstrap";

const Experience = () => {
  return (
    <Layout>
      <Container fluid style={{background: '#f0f0f0'}}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Infosys</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Test Engineer (SDET)
          </h5>
          <p>
            Working on NodeJS based Automation Framework to create and maintain
            Regression test suites and CICD Pipeline.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2016 - 2020"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Maulana Abul Kalam Azad University of Technology
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor of Technology / B. Tech.
          </h5>
          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2015 - 2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            West Bengal Council of Higher Secondary Education
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Higher Secondary / 12<sup>th</sup>
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2013 - 2014"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            West Bengal Board Of Secondary Education
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Secondary / 10<sup>th</sup>
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </Container>
    </Layout>
  );
};

export default Experience;
