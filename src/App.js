import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import peecelogo from "./Assets/peecelogo.jpg";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Donate from "./Components/Donate";
import Events from "./Components/Events";
import Home from "./Components/Home";
import Image from "react-bootstrap/Image";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav.Link href="/">
          <Image
            alt="logo"
            src={peecelogo}
            width="180px"
            height="150px"
            className="d-inline-block align-top"
            roundedCircle
            style={{ marginTop: "6%" }}
            href="/"
          />
        </Nav.Link>
        <Nav
          className="justify-content-center"
          activeKey="/"
          style={{
            borderTop: "solid 2px DodgerBlue",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <Nav.Item>
            <Nav.Link style={{ color: "#85200c" }} href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ color: "#85200c" }} href="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ color: "#85200c" }} href="/donate">
              {" "}
              Donate
            </Nav.Link>
          </Nav.Item>

          {/* <Nav.Item>
      <Nav.Link style={{color:"#803CAE"}} href="/services">Services</Nav.Link>
    </Nav.Item> */}

          {/* <p className="text-center mt-4 mb-4">Or right-aligned</p> */}
          {/* <Nav className="justify-content-end" activeKey="/home"> */}
          <Nav.Item>
            <Nav.Link style={{ color: "#85200c" }} href="/events">
              Events
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
      <Nav.Link style={{color:"#803CAE"}} href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AFit+for+the+Soul&ref=bl_sl_s_ap_web_7141123011">Products</Nav.Link>
    </Nav.Item> */}

          <Nav.Item>
            <Nav.Link style={{ color: "#85200c" }} href="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/donate" component={Donate} />

          <Route path="/events" component={Events} />

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
