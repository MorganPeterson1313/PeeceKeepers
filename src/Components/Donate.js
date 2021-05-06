import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export class Donate extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={{ margin: "10%", backgroundColor: "#073763" }}>
          <h1 style={{ color: "white " }}>Donate</h1>
          <p style={{ color: "white " }}>
            We are raising money for Community Outreach Initiatives. I've raised
            $100 so far, but I still have a ways to go to completely reach my
            goal! Would you consider making a donation (even small gifts help!)
            to assist me in my fundraising efforts?
          </p>
          <p>
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="2AK3T92WAYZ68"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Donate;
