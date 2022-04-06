import React, { Component } from "react";
import PortfolioIntro from "./portfolio/PortfolioIntro";
import PortfolioItems from "./portfolio/PortfolioItems";
import Seo from "./layout/Seo";

class PortfolioPage extends Component {
  componentDidMount() {
    //document.querySelector("#homeLink").classList.remove("active");
  }
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <Seo title="Images From Tours" />
        <div className="container">
          <PortfolioIntro />

          <PortfolioItems />
        </div>
      </section>
    );
  }
}

export default PortfolioPage;
