import React from "react";
import Project from "../Project";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import tvaraImage from "../../assets/images/tvara.png";
import abraImage from "../../assets/images/abra.png";
import noteImage from "../../assets/images/note-taker.png";
import weatherImage from "../../assets/images/weather-dashboard.png";
import calendarImage from "../../assets/images/calendar.png";
import passwordImage from "../../assets/images/password-generator.png";

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
          <Col style={{ margin: "1rem 0" }} className="mx-auto">
            <Project
              imageSrc={noteImage}
              projectName="Note Taker"
              githubLink="https://github.com/ChristianGroselle/11-christians-note-taker"
              deployLink="https://dry-woodland-30040.herokuapp.com"
            />
          </Col>
          <Col style={{ margin: "1rem 0" }} className="mx-auto">
            <Project
              imageSrc={weatherImage}
              projectName="Weather Dashboard"
              githubLink="https://github.com/ChristianGroselle/ChristiansFantasticWeatherDashboard"
              deployLink="https://christiangroselle.github.io/ChristiansFantasticWeatherDashboard/"
            />
          </Col>
          <Col style={{ margin: "1rem 0" }} className="mx-auto">
            <Project
              imageSrc={calendarImage}
              projectName="Christians Calender"
              githubLink="https://github.com/ChristianGroselle/05-christians-calender-app"
              deployLink="https://christiangroselle.github.io/05-christians-calender-app/"
            />
          </Col>
          <Col style={{ margin: "1rem 0" }} className="mx-auto">
            <Project
              imageSrc={passwordImage}
              projectName="Password Generator"
              githubLink="https://github.com/ChristianGroselle/christians-password-generator-challenge"
              deployLink=" https://christiangroselle.github.io/christians-password-generator-challenge/"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
