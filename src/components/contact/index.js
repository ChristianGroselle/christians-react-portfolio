import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
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
    } else if (!/\S+@\S+\.\S+/.test(email)) {
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
    }
  };

  return (
    <Form className="contact-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
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
      <Form.Group className="mb-3" controlId="formMessage">
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
  );
};

export default Contact;
