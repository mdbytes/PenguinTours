import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ServicesIntro from "./services/ServicesIntro";
import Services from "./services/Services";
class ServicesPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <ServicesIntro />
          <Services />
        </div>
      </section>
    );
  }
}

export default ServicesPage;
