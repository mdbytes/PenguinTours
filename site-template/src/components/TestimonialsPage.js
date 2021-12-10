import React, { Component } from "react";
import TestimonialSlider from "./testimonials/TestimonialSlider";

import logoTest from "../images/logo.jpeg";

class Testimonials extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <div>
        <section className="testimonials" id="testimonials">
          <div id="testimonials-bookmark" className="row"></div>
          <div className="container">
            <div className="row text-center text-white">
              <h1 className="display-3 fw-bold">
                Testimonials
                <img src={logoTest} alt="logo" />
              </h1>
              <hr className="mx-auto" />
              <p className="lead pt-1">what our clients are saying</p>
            </div>
            <TestimonialSlider />
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonials;
