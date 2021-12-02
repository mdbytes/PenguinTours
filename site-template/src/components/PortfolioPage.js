import React, { Component } from "react";

import portfolioOne from "../images/portfolio/portfolio-1.jpg";
import portfolioTwo from "../images/portfolio/portfolio-2.jpg";
import portfolioThree from "../images/portfolio/portfolio-3.jpg";
import portfolioFour from "../images/portfolio/portfolio-4.jpg";
import portfolioFive from "../images/portfolio/portfolio-5.jpg";
import portfolioSix from "../images/portfolio/portfolio-6.jpg";
import portfolioSeven from "../images/portfolio/portfolio-7.jpg";
import portfolioEight from "../images/portfolio/portfolio-8.jpg";
import portfolioNine from "../images/portfolio/portfolio-9.jpg";

import logoPort from "../images/logo2sm.png";

class PortfolioPage extends Component {
  componentDidMount() {}
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row text-center mt-5">
            <h1 className="display-3 fw-bold text-capitalize">
              Latest Work
              <img src={logoPort} alt="logo" />
            </h1>
            <div className="heading-line"></div>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus cum quam deleniti!
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
                Design
              </button>
              <button className="btn btn-outline-primary" type="button">
                Mockup
              </button>
              <button
                id="detailView"
                className="btn btn-outline-primary"
                type="button"
              >
                View Details
              </button>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioOne}
                    alt="portfolio 1 picture"
                    title="portfolio 1 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 1</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioTwo}
                    alt="portfolio 2 picture"
                    title="portfolio 2 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 2</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioThree}
                    alt="portfolio 3 picture"
                    title="portfolio 3 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 3</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioFour}
                    alt="portfolio 4 picture"
                    title="portfolio 4 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 4</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioFive}
                    alt="portfolio 5 picture"
                    title="portfolio 5 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 5</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioSix}
                    alt="portfolio 6 picture"
                    title="portfolio 6 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 6</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioSeven}
                    alt="portfolio 7 picture"
                    title="portfolio 7 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 7</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioEight}
                    alt="portfolio 8 picture"
                    title="portfolio 8 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 8</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-box shadow">
                  <img
                    src={portfolioNine}
                    alt="portfolio 9 picture"
                    title="portfolio 9 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>project name goes here 9</h4>
                      <p>category project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioPage;
