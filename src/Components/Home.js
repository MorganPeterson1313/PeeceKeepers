import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Contact from "./Contact";
import Button from "react-bootstrap/esm/Button";
import World from "../Assets/World.jpg";
import peecelogo from "../Assets/peecelogo.jpg";
import riverside from "../Assets/Riverside.jpg";
import "../index.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div style={{ display: "flex" }}>
            <Image
              alt="Peace Sign"
              src={riverside}
              className="d-inline align-top-left"
              fluid
            />
          </div>

          <Switch>
            <Route path="/contact" component={Contact} />
            {/* <Route render={function () {
                            return <p>Not found</p>
                        }} /> */}
          </Switch>
        </Container>
      </div>
    );
  }
}

export default Home;
