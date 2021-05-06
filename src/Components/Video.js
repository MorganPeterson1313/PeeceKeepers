import React, { Component } from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Christmas from "../Assets/Christmas.jpeg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";

export class Video extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <a href="https://www.youtube.com/watch?v=P8qivvdNqUw">
            <Image
              src={Christmas}
              width="auto"
              height="auto"
              className="d-block"
              fluid
            />
          </a>
        </Container>
      </div>
    );
  }
}

export default Video;
