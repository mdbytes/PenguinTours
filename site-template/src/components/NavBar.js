import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo2sm.png";

class NavBar extends Component {
  componentDidMount() {
    const navToggleLink = document.querySelector("#navToggler");
    const homeLink = document.querySelector("#homeLink");
    const servicesLink = document.querySelector("#servicesLink");
    const testimonialsLink = document.querySelector("#testimonialsLink");
    const faqLink = document.querySelector("#faqLink");
    const portfolioLink = document.querySelector("#portfolioLink");
    const contactLink = document.querySelector("#contactLink");

    const navToggler = document.querySelector("#navToggler");

    homeLink.addEventListener("click", () => {
      console.log("nav link clicked");
      navToggler.click();
    });

    servicesLink.addEventListener("click", () => {
      console.log("nav link clicked");
      navToggler.click();
    });

    testimonialsLink.addEventListener("click", () => {
      console.log("nav link clicked");
      navToggler.click();
    });

    faqLink.addEventListener("click", () => {
      console.log("nav link clicked");
      navToggler.click();
    });

    portfolioLink.addEventListener("click", () => {
      console.log("nav link clicked");
      navToggler.click();
    });

    contactLink.addEventListener("click", () => {
      console.log("nav link clicked");
      navToggler.click();
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
          <div className="container">
            <a className="navbar-brand d-flex align-items-end" href="/">
              <img src={logo} alt="logo" />
            </a>
            <button
              id="navToggler"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item d-flex align-items-center ">
                  <NavLink id="homeLink" className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="servicesLink"
                    className="nav-link"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="testimonialsLink"
                    className="nav-link"
                    to="/testimonials"
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink id="faqLink" className="nav-link" to="/faq">
                    Faq
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="portfolioLink"
                    className="nav-link"
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink id="contactLink" className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
