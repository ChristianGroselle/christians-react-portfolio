import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./index.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    setEmail(e.target.value);
    setEmailValid(emailRegex.test(e.target.value));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let isValid = true;
    if (!name) {
      alert("Please enter your name.");
      isValid = false;
    }
    if (!email) {
      alert("Please enter your email address.");
      isValid = false;
    } else if (
      !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(email)
    ) {
      alert("Please enter a valid email address.");
      isValid = false;
    }
    if (!message) {
      alert("Please enter a message.");
      isValid = false;
    }
    if (isValid) {
      // Submit the form
      form.submit();
    } else {
      // Form is not valid, do nothing
      return;
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        transition: "background-color 0.5s ease",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "var(--light-color)",
          color: "var(--text-color)",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "var(--light-color)",
          color: "var(--text-color)",
        }}
      >
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formName"
            style={{
              backgroundColor: "var(--light-color)",
              color: "var(--text-color)",
            }}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formEmail"
            style={{
              backgroundColor: "var(--light-color)",
              color: "var(--text-color)",
            }}
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!emailValid && email !== ""}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formMessage"
            style={{
              backgroundColor: "var(--light-color)",
              color: "var(--text-color)",
            }}
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
              value={message}
              onChange={handleMessageChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="d-flex justify-content-center mt-3 mx-auto"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{
          backgroundColor: "var(--light-color)",
          color: "var(--text-color)",
        }}
      >
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contact;
