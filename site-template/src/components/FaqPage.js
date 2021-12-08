import React, { Component } from "react";
import FaqAccordion from "./faq/FaqAccordion";

import logoFAQ from "../images/logo.png";

class FaqPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
    document.querySelector("#heading1 > button").click();
  }

  render() {
    return (
      <section id="faq" className="faq">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-uppercase">
              faq
              <img src={logoFAQ} alt="logo" />
            </h1>
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
