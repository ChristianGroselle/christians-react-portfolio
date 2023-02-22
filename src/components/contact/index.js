import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./index.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameValid(e.target.value);
    if (nameValid && emailValid && messageValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleNameBlur = (e) => {
    setNameValid(e.target.value.trim() !== "");
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    setEmail(e.target.value);
    setEmailValid(emailRegex.test(e.target.value));
    if (
      nameValid &&
      name.trim() &&
      emailValid &&
      email.trim() &&
      messageValid &&
      message.trim()
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleEmailBlur = (e) => {
    setEmailValid(e.target.value.trim() !== "");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageValid(e.target.value);
    if (
      nameValid &&
      name.trim() &&
      emailValid &&
      email.trim() &&
      messageValid &&
      message.trim()
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleMessageBlur = (e) => {
    setMessageValid(e.target.value.trim() !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (formValid) {
      form.submit();
    } else {
      return;
    }
  };

  return (
    <Modal
      {...props}
      style={{
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
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "var(--light-color)",
          color: "var(--text-color)",
        }}
      >
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              isInvalid={!nameValid}
              onBlur={handleNameBlur}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!emailValid && email !== ""}
              onBlur={handleEmailBlur}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
              value={message}
              onChange={handleMessageChange}
              isInvalid={!messageValid}
              onBlur={handleMessageBlur}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a message.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!formValid}>
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
