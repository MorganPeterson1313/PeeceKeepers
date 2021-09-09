import React, { Component } from "react";

export class Resources extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            color: "black",
            fontSize: "50px",
            textAlign: "left",
            alignContent: "center",
            background: "grey",
          }}
        >
          Resources
        </h1>
        <h1> Special Education Resource </h1>
        <h3>
          For more information click{" "}
          <a href="https://www.dgs.ca.gov/OAH/Case-Types/Special-Education">
            here
          </a>{" "}
          to visit Special Education Office of Administrative Hearings{" "}
        </h3>
      </div>
    );
  }
}

export default Resources;
