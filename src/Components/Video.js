import React, { Component } from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Christmas from "../Assets/Christmas.jpeg";
import Image from "react-bootstrap/Image";
export class Video extends Component {
  render() {
    return (
      <div style={{ width: 660, height: "auto" }}>
        <a href="https://www.youtube.com/watch?v=P8qivvdNqUw">
          <Image src={Christmas} fluid />
        </a>
      </div>
    );
  }
}

export default Video;
