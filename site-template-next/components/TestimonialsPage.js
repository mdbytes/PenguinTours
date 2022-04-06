import React, { Component } from "react";
import TestimonialSlider from "./testimonials/TestimonialSlider";
import Seo from "./layout/Seo";

class Testimonials extends Component {
  render() {
    return (
      <div>
        <section className="testimonials" id="testimonials">
          <Seo title="Customer Feedback" />
          <div id="testimonials-bookmark" className="row"></div>
          <div className="container">
            <div className="row text-center text-white">
              <h1 className="display-3 fw-bold">Testimonials</h1>
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
