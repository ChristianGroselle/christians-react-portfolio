import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import resumeFile from "../../assets/tempResume.pdf";

const Resume = () => {
  return (
    <>
      <h5>Front-end experience</h5>
      <ListGroup>
        <ListGroup.Item>
          <p>HTML</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>CSS</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>JavaScript</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>JQuery</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Mobile-first design</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Bootstrap</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>React-Bootstrap</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Materialize</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>React</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Apollo</p>
        </ListGroup.Item>
      </ListGroup>
      <hr />
      <h5>Back-end experience</h5>
      <ListGroup>
        <ListGroup.Item>
          <p>Node</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Express</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>APIs</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>MySql/Sequelize</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>MongoDB/Mongoose</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>REST</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>GraphQL</p>
        </ListGroup.Item>
      </ListGroup>
      <hr />
      <h5>Other experience</h5>
      <ListGroup>
        <ListGroup.Item>
          <p>Python/Vizard</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Java</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>C#</p>
        </ListGroup.Item>
      </ListGroup>

      <Button variant="success" href={resumeFile} download>
        Download PDF
      </Button>
    </>
  );
};

export default Resume;
