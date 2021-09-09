import React, { Component } from "react";

export class employ extends Component {
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
          Employment Matters
        </h2>
        <p
          style={{
            textAlign: "left",
            marginLeft: "5%",
            fontSize: "30px",
          }}
        >
          We assist with employment matters.
        </p>
      </div>
    );
  }
}

export default employ;
