import React, { Component } from "react";
import FaqAccordion from "./faq/FaqAccordion";
import Seo from "./layout/Seo";

class FaqPage extends Component {
  render() {
    return (
      <section id="faq" className="faq">
        <Seo title="Frequently Asked Questions" />
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-uppercase">faq</h1>
            <div className="heading-line"></div>
            <p className="lead">
              Frequently asked questions, getting answers in advance.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    );
  }
}

export default FaqPage;
