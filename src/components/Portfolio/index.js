import React from "react";
import Project from "../Project";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import tvaraImage from "../../assets/images/tvara-home.png";
import abraImage from "../../assets/images/abra-home.png";

const Portfolio = () => {
  return (
    <>
      <Container bg="light">
        <h5>Portfolio</h5>
        <Row xs={1} sm={1} md={2} xl={3}>
          <Col style={{ margin: "1rem 0" }} className="mx-auto">
            <Project
              imageSrc={tvaraImage}
              projectName="TVARA"
              githubLink="https://github.com/ChristianGroselle/TVARA"
              deployLink="http://tvara.net/"
            />
          </Col>
          <Col style={{ margin: "1rem 0" }} className="mx-auto">
            <Project
              imageSrc={abraImage}
              projectName="ABRA"
              githubLink="https://github.com/ChristianGroselle/ABRA"
              deployLink="https://shrouded-coast-13433.herokuapp.com"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
