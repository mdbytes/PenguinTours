import React, { Component } from "react";
import ServicesIntro from "./services/ServicesIntro";
import Services from "./services/Services";
import Seo from "./layout/Seo";

class ServicesPage extends Component {
  render() {
    return (
      <section id="services" className="services">
        <Seo title="What We Do" />
        <div className="container">
          <ServicesIntro />
          <Services />
        </div>
      </section>
    );
  }
}

export default ServicesPage;
