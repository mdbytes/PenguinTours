import React, { Component } from "react";

import logoPort from "../../images/logo.png";

class PortfolioIntro extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }
  render() {
    return (
      <React.Fragment>
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">
            Photo Gallery
            <img src={logoPort} alt="logo" />
          </h1>
          <div className="heading-line"></div>
          <p className="lead">Here's a little of what's been going on...</p>
          <p className="mobilePresent">
            Tap on any image to display in full screen gallery.
          </p>
          <p className="largePresent">
            Hover over any image to display in full screen gallery.
          </p>
        </div>
        <div className="row text-center mt-5 mb-4 g-3">
          <div className="col-md-12">
            <button className="btn btn-outline-primary" type="button">
              All
            </button>
            <button className="btn btn-outline-primary" type="button">
              Websites
            </button>
            <button className="btn btn-outline-primary" type="button">
              Web Applications
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioIntro;
