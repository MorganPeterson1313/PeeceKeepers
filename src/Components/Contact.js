import React, { Component } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <Card style={{ width: "30rem", backgroundColor: "#073763" }}>
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Get In touch</Card.Title>
              <Card.Text>
                <section id="footer">
                  <div class="container">
                    <header class="major"></header>
                    <div style={{ alignContent: "center", margin: "2%" }}>
                      <Form
                        name="contact3"
                        action="/contact"
                        method="POST"
                        onSubmit="submit"
                      >
                        <input
                          type="hidden"
                          name="form-name"
                          value="contact3"
                        />
                        <Form.Group controlId="formBasicEmail">
                          <Row>
                            <Form.Label style={{ color: "white" }}>
                              First Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="first-name"
                              placeholder="Enter First Name"
                            />
                            <Form.Label style={{ color: "white" }}>
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="last-name"
                              placeholder="Enter Last Name"
                            />
                          </Row>
                          <Form.Label style={{ color: "white" }}>
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                          />
                          <Form.Text style={{ color: "white" }}>
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label style={{ color: "white" }}>
                            Message
                          </Form.Label>
                          <Form.Control as="textarea" rows={3} name="message" />
                        </Form.Group>
                        <Button
                          variant="light"
                          style={{ color: "teal" }}
                          type="submit"
                        >
                          Send
                        </Button>
                      </Form>
                    </div>
                  </div>
                </section>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* <Switch>
            <Route path="/services" component={Services} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default Contact;
