import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import myImage from "../../assets/images/newerPhoto.jpg";

const About = () => {
  return (
    <Container
      className="marginTop"
      style={{
        backgroundColor: "var(--light-color)",
        color: "var(--text-color)",
      }}
    >
      <Row className="align-items-center">
        <Col md="10">
          <Card
            style={{
              backgroundColor: "var(--light-color)",
              color: "var(--text-color)",
            }}
          >
            <Card.Img
              variant="top"
              src={myImage}
              alt="Profile Photo"
              roundedCircle
              fluid
            />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text style={{ whiteSpace: "pre-wrap" }}>
                I was born in Suwanee GA, but moved to Macon very early on in
                life. In Macon I lived on a horse and cattle ranch. I have
                always had an interests in programming, I started programming in
                middle school
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
