import React, { Component } from "react";

export class partnership extends Component {
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
          Our Services
        </h1>
        <h2 style={{ textAlign: "left", marginTop: "5%", marginLeft: "5%" }}>
          Business Parntership Mediation
        </h2>
        <p
          style={{
            textAlign: "left",
            marginLeft: "5%",
            fontSize: "30px",
          }}
        >
          We assist with court business partnership mediation.
        </p>
      </div>
    );
  }
}

export default partnership;
