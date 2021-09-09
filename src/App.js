import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import scale from "./Assets/scale.png";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Donate from "./Components/Services";
import Events, { Resources } from "./Components/Resources";
import Home from "./Components/Home";
import Image from "react-bootstrap/Image";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Video from "./Components/Video";
import Dropdown from "react-bootstrap/Dropdown";
import partnership from "./Components/DropDown/partnership";
import employ from "./Components/DropDown/employ";
import court from "./Components/DropDown/court";
import special from "./Components/DropDown/special";
import family from "./Components/DropDown/family";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <div style={{ background: "grey" }}>
          <Nav.Link href="/">
            <div style={{ display: "flex" }}>
              <Image
                alt="scale of justice"
                src={scale}
                width="180px"
                height="150px"
                className="d-block align-top-left"
                roundedCircle
                style={{ marginTop: "6%" }}
                href="/"
              />
              <div style={{ marginLeft: "5%" }}>
                <h1
                  style={{
                    color: "gold",
                    fontSize: "50px",
                  }}
                >
                  Riverside County Family Mediation
                </h1>
                <p
                  style={{
                    color: "gold",
                    fontSize: "50px",
                  }}
                >
                  You Matter
                </p>
                <p style={{ color: "black" }}>
                  Disclaimer we are not employees of nor affiliated with the
                  Riverside Family Court
                </p>
              </div>
            </div>
          </Nav.Link>
          <Nav
            className="justify-content-center"
            activeKey="/"
            style={{
              background: "black",
            }}
          >
            <Nav.Item>
              <Nav.Link id="navStyle" style={{ color: "white" }} href="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                id="navStyle"
                style={{ color: "white", weight: "bold" }}
                href="/about"
              >
                About
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link
                id="navStyle"
                style={{ color: "white", weight: "bold" }}
                href="/donate"
              >
                {" "}
                Our Services
              </Nav.Link>
            </Nav.Item> */}

            <Dropdown>
              <Dropdown.Toggle
                style={{ background: "black" }}
                id="dropdown-basic"
              >
                Practice Areas
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/family">
                  Family Mediation & Contested Adoptions
                </Dropdown.Item>
                <Dropdown.Item href="/special">
                  Special Education Mediation
                </Dropdown.Item>
                <Dropdown.Item href="/court">
                  {" "}
                  Court Order Mediation
                </Dropdown.Item>
                <Dropdown.Item href="/partnership">
                  Business Disputes
                </Dropdown.Item>
                <Dropdown.Item href="/employ">Employment</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <Nav.Item>
              <Nav.Link
                id="navStyle"
                style={{ color: "white", weight: "bold" }}
                href="/video"
              >
                See us in Action
              </Nav.Link>
            </Nav.Item> */}

            {/* <p className="text-center mt-4 mb-4">Or right-aligned</p> */}
            {/* <Nav className="justify-content-end" activeKey="/home"> */}
            <Nav.Item>
              <Nav.Link
                style={{ color: "white", weight: "bold" }}
                href="/resources"
              >
                Resources
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
      <Nav.Link style={{color:"#803CAE"}} href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AFit+for+the+Soul&ref=bl_sl_s_ap_web_7141123011">Products</Nav.Link>
    </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                style={{ color: "white", weight: "heavy" }}
                href="/contact"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/family" component={family} />
          <Route path="/special" component={special} />
          <Route path="/employ" component={employ} />
          <Route path="/partnership" component={partnership} />
          <Route path="/court" component={court} />
          <Route path="/video" component={Video} />
          <Route path="/resources" component={Resources} />

          <Route path="/contact" component={Contact} />
          {/* <Route render={function () {
                            return <p>Not found</p>
                        }} /> */}
        </Switch>

        <footer
          style={{ textAlign: "center", color: "white", marginTop: "5%" }}
        >
          {/* <div style={{display:'flex', justifyContent: 'center'}}>
                   
                     <Nav.Link href ="">
                   <Image
                    alt="logo"
                    src={Instagram_Circle} 
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    roundedCircle
                  />{' '}
                  </Nav.Link>
                  <Nav.Link href = "">
                   <Image
                    alt="logo"
                    src={tiktok} 
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    roundedCircle
                  />{' '}
                  </Nav.Link>
                   </div> */}
        </footer>

        {/* <Form style={{margin:"2%", paddingLeft:"20%", paddingRight:"20%"}}>
<h4 style={{color:"teal"}}>Subscribe Form</h4>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{color:"teal"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  
  <Button variant="info" type="submit">
    Subscribe
  </Button>
</Form> */}

        <div style={{ marginBottom: "5%" }}>
          <h6 style={{ color: "dodgerBlue", fontSize: "15px" }}>
            © 2021 by Morgan Dalia Peterson
          </h6>
        </div>
      </Container>
    </div>
  );
}

export default App;
