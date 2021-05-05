import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Contact from "./Contact";
import Button from "react-bootstrap/esm/Button";
import World from "../Assets/World.jpg";
import peecelogo from "../Assets/peecelogo.jpg";
import Community from "../Assets/community.jpg";
import "../index.css";
import Image from "react-bootstrap/Image";
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <Image
          style={{
            width: "auto",
            height: "auto",
            display: "flex",
            marginLeft: "40%",
          }}
          src={peecelogo}
        /> */}
        <h1
          style={{ marginTop: "5%", marginBottom: "5%", color: "dodgerblue" }}
        >
          P.E.E.C.E. KEEPERS
        </h1>

        <div style={{ marginLeft: "10%" }}>
          <Card
            style={{
              width: "30rem",
              height: "55rem",
              position: "absolute",
              top: "9",
              right: "2",
              zIndex: "10",
              backgroundColor: "dodgerBlue",
              opacity: "90%",
              marginTop: "5%",
            }}
          >
            <Card.Body style={{ color: "white" }}>
              <Card.Title>About Us</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text style={{ color: "white" }}>
                <p>
                  P.E.E.C.E. KEEPERS is a catalyst for change dedicated to
                  promoting mental health awareness and wellness.
                </p>

                <p>
                  <h4>Our goals</h4>
                  are to join with positive community activist who seek to
                  promote positive social progress and ethical growth in
                  communities in crisis and social systems breakdown. In the
                  next five years I plan to build a corporation which will
                  enhance the atmosphere and work toward the betterment of the
                  lives of our children, elders, and less fortunate.
                </p>

                <p>
                  <h4>Our mission</h4> is to restore balance, promote peace and
                  inspire ethical growth in communities of crisis and social
                  systems breakdown. Our goal is to help people empower
                  themselves; championing others to grow professionally,
                  emotionally, and spiritually and encourage others’ inherent
                  goodness.
                </p>
                <p>
                  <h4>P.E.E.C.E.</h4>
                </p>
                <p>Positive Energy Engaging Communities Everywhere</p>
                <p>Algrie Monique Bridges</p>
                <p>Chief Executive Officer </p>
              </Card.Text>
              <Button variant="light" style={{ color: "teal" }} href="/contact">
                Get In Touch
              </Button>
              {/* <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>

          <Image
            alt="Peace Sign"
            src={World}
            width="auto"
            height="auto"
            className="d-block"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative ",
              border: "50px #073763 solid ",
            }}
          />
        </div>

        <Image
          alt="Peace Sign"
          src={Community}
          width="auto"
          height="auto"
          className="d-inline-block align-top"
          style={{ marginTop: "10%", border: "50px #073763 solid " }}
        />
        <Switch>
          <Route path="/contact" component={Contact} />
          {/* <Route render={function () {
                            return <p>Not found</p>
                        }} /> */}
        </Switch>
      </div>
    );
  }
}

export default Home;
