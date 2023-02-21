import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import myImage from "../../assets/images/oldPhoto.jpg";

const About = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={4}>
          <Image src={myImage} alt="Profile Photo" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                rhoncus tellus sed elit interdum euismod. Aliquam non tellus
                vitae velit placerat euismod sit amet sed risus. Morbi
                ullamcorper, tortor sit amet viverra auctor, risus nunc
                condimentum libero, nec suscipit neque nibh eu dolor. Sed
                pharetra mauris in libero finibus, sit amet auctor risus
                tincidunt. Duis lobortis est eget lectus convallis tincidunt.
                Nullam dictum dolor eu vestibulum lobortis. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Donec lobortis, ipsum vel auctor eleifend, lectus odio
                viverra elit, non fermentum ex erat ut nisi. In sit amet turpis
                quam.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
