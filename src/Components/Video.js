import React, { Component } from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Christmas from "../Assets/Christmas.jpeg";
import Basketball from "../Assets/Basketball.jpeg";
import ShutDown from "../Assets/ShutDown.jpeg";
import CharityEvent from "../Assets/CharityEvent.jpeg";
import Tuskeegee from "../Assets/Tuskeegee.jpeg";
import Walkathon from "../Assets/Walkathon.jpeg";
import GoodDay from "../Assets/GoodDay.jpeg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import "../index.css";
export class Video extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div
            id="Videos "
            className="d-flex flex-wrap bd-highlight example-parent"
          >
            <a href="https://www.youtube.com/watch?v=P8qivvdNqUw">
              <Image
                src={Christmas}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>

            <a href="https://www.youtube.com/watch?v=Cx9njmX-Vxc">
              <Image
                src={Basketball}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>

            <a href="https://www.youtube.com/watch?v=MIJEUZ7A_sY">
              <Image
                src={ShutDown}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>

            <a href="https://www.youtube.com/watch?v=d7-SDtSGqDg">
              <Image
                src={CharityEvent}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>

            <a href="https://www.youtube.com/watch?v=zKpFajHV-GE">
              <Image
                src={Tuskeegee}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>

            <a href="https://www.youtube.com/watch?v=dkgKCuiN7WM">
              <Image
                src={GoodDay}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>

            <a href="https://www.youtube.com/watch?v=x8YjVnARxM4">
              <Image
                src={Walkathon}
                width="auto"
                height="auto"
                className="p-2 bd-highlight col-example"
                fluid
              />
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default Video;
