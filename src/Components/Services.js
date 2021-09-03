import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export class Services extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron style={{ margin: "10%", backgroundColor: "grey" }}>
            <h1 style={{ color: "white " }}>Our Services</h1>
            <p style={{ color: "white " }}>
              We are raising money for Community Outreach Initiatives. I've
              raised $100 so far, but I still have a ways to go to completely
              reach my goal! Would you consider making a donation (even small
              gifts help!) to assist me in my fundraising efforts?
            </p>
            <p></p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Services;
