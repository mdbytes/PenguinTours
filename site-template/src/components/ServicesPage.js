import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import imageOne from "../images/services/services-1.png";
import imageTwo from "../images/services/services-2.png";
import imageThree from "../images/services/services-3.png";

import logoSvc from "../images/logo.png";

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
          <div className="row text-center">
            <h1 className="display-3 fw-bold">
              Our Services
              <img src={logoSvc} alt="logo" />
            </h1>
            <div className="heading-line mb-1"></div>
          </div>

          <div className="row pt-2 mt-1 mb1">
            <div className="col-md-6 border-right">
              <div className="service-items p-3">
                <h4 className="">
                  <br />
                  <div>
                    <div className="service-item row">
                      <div className="col-1">
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="col-11">
                        Year round tours of the Antarctic
                      </div>
                    </div>
                    <div className="service-item row">
                      <div className="col-1">
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="col-11">
                        Close up encounters with penguins
                      </div>
                    </div>

                    <div className="service-item row">
                      <div className="col-1">
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="col-11">Comfortable accommodations</div>
                    </div>
                  </div>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="services-overview p-4 text-start">
                <p className="fw-light">
                  Penguin Tours, Ltd. is a ficticious company invented to
                  demonstrate functionality and adaptability of a website
                  template. But if we existed, we would provide year round tours
                  of the Antarctic, by boat and by foot, including breathtaking
                  encounters with penguins and comfortable accommodations.
                </p>
              </div>
            </div>
          </div>

          <div className="row service-item-row">
            <div className="col-md-6 col-sm-12 col-xs-12 services-column">
              <div className="services__content">
                <div className="icon fas fa-paper-plane d-block"></div>
                <h3 className="display-3--title">Antarctic Tours</h3>
                <p className="lh-lg">
                  We are constantly striving for new and exciting ways to tour
                  the exciting Antarctic, whether by boat, vehicle, or on foot.
                </p>
                <div class="learn-btn">
                  <NavLink
                    to="/contact"
                    type="button"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    Learn More
                    <span>
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12  services-column">
              <div className="services__pic">
                <img src={imageOne} alt="UI Design" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row  service-item-row">
            <div className="col-md-6 col-sm-12 col-xs-12  services-column left-content">
              <div className="services__content ">
                <div className="icon fas fa-code d-block"></div>
                <h3 className="display-3--title">Penguin Encounters</h3>
                <p className="lh-lg">
                  A primary goal of our tours is to introduce visitors to the
                  most popular and amazing bird on the planet, i.e. the penguin.{" "}
                </p>
                <div class="learn-btn">
                  <NavLink
                    to="/contact"
                    type="button"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    Learn More
                    <span>
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12  services-column">
              <div className="services__pic">
                <img
                  src={imageTwo}
                  alt="web development"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12  services-column right-content">
              <div className="services__content ">
                <div className="icon fas fa-code d-block"></div>
                <h3 className="display-3--title">Penguin Encounters</h3>
                <p className="lh-lg">
                  A primary goal of our tours is to introduce visitors to the
                  most popular and amazing bird on the planet, i.e. the penguin.{" "}
                </p>
                <div class="learn-btn">
                  <NavLink
                    to="/contact"
                    type="button"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    Learn More
                    <span>
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="row  service-item-row">
            <div className="col-md-6 col-sm-12 col-xs-12  services-column">
              <div className="services__content">
                <div className="icon fas fa-cloud-upload-alt d-block"></div>
                <h3 className="display-3--title">Accommodations</h3>
                <p className="lh-lg">
                  If we existed, which we do not, but if we did exist, we would
                  no doubt have comfortable accommodations like this facility on
                  the side of a mountain in the Antarctic.{" "}
                </p>
                <div class="learn-btn">
                  <NavLink
                    to="/contact"
                    type="button"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    Learn More
                    <span>
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12  services-column">
              <div className="services__pic">
                <img src={imageThree} alt="cloud" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesPage;
