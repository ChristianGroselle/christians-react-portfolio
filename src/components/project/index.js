import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import { Card, Image, OverlayTrigger, Tooltip, Stack } from "react-bootstrap";
import "./index.css";

const Project = ({ imageSrc, projectName, githubLink, deployLink }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseOver = () => {
    setShowOverlay(true);
  };

  const handleMouseOut = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <Card className="project-card mX">
        <Card.Img src={imageSrc} alt={projectName} />
        <Card.ImgOverlay
          style={{
            transition: "background-color 0.5s ease",
            backgroundColor: showOverlay
              ? "rgba(255, 255, 255, 0.7)"
              : "transparent",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <OverlayTrigger
            overlay={
              <Stack
                direction="horizontal"
                gap={3}
                className="overlay-text"
                style={{
                  margin: "-1rem 0",
                  color: "black",
                }}
              >
                <a href={deployLink}>
                  <Card.Title>{projectName}</Card.Title>
                </a>
                <div className="vr" />
                <a href={githubLink}>
                  <Icon path={mdiGithub} size={1} />
                </a>
              </Stack>
            }
            show={showOverlay}
          >
            <div className="card-overlay"></div>
          </OverlayTrigger>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Project;
