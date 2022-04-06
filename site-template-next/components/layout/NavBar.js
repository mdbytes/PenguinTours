import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

const logo = "/images/logo-small.png";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.navClick = this.navClick.bind(this);
  }

  navClick = (evt) => {
    document.querySelector("#navToggler").click();
    if (evt.target.getAttribute("id") !== "homeLink") {
      document.querySelector("#homeLink").classList.remove("active");
    } else {
      document.querySelector("#homeLink").classList.add("active");
    }
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container">
            <Link href="/" passHref>
              <div className="navbar-brand d-flex align-items-end">
                <Image height={50} width={38} src={logo} alt="logo" />
                <span className="logo-font">Penguin Tours, Ltd.</span>
              </div>
            </Link>
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
                  <Link
                    id="homeLink"
                    className="nav-link"
                    href="/"
                    onClick={this.navClick}
                    passHref
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="servicesLink"
                    className="nav-link"
                    href="/services"
                    onClick={this.navClick}
                    passHref
                  >
                    Services
                  </Link>
                </li>
                <li
                  id="portfolioLink"
                  className="nav-item d-flex align-items-center nav-link"
                >
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="testimonialsLink"
                    className="nav-link"
                    href="/testimonials"
                    onClick={this.navClick}
                    passHref
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="faqLink"
                    className="nav-link"
                    href="/faq"
                    onClick={this.navClick}
                    passHref
                  >
                    Faq
                  </Link>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="contactLink"
                    className="nav-link"
                    href="/contact"
                    onClick={this.navClick}
                    passHref
                  >
                    Contact
                  </Link>
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
