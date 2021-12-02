import React, { Component } from "react";
import companyOne from "../images/companies/company-1.png";
import companyTwo from "../images/companies/company-2.png";
import companyThree from "../images/companies/company-3.png";
import companyFour from "../images/companies/company-4.png";
import companyFive from "../images/companies/company-5.png";
import companySix from "../images/companies/company-6.png";

class Companies extends Component {
  componentDidMount() {}

  render() {
    return (
      <section id="companies" className="companies">
        <div className="container">
          <div className="row text-center">
            <h4 className="fw-bold lead mb-3">Trusted by companies like</h4>
            <div className="heading-line"></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-2 companies__logo-box shadow-sm">
                <img
                  src={companyOne}
                  alt="company 1 logo"
                  title="Company 1 Logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-lg-2 companies__logo-box shadow-sm">
                <img
                  src={companyTwo}
                  alt="company 2 logo"
                  title="Company 2 Logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-lg-2 companies__logo-box shadow-sm">
                <img
                  src={companyThree}
                  alt="company 3 logo"
                  title="Company 3 Logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-lg-2 companies__logo-box shadow-sm">
                <img
                  src={companyFour}
                  alt="company 4 col-lg-2 logo"
                  title="Company 4 col-lg-2 Logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-lg-2 companies__logo-box shadow-sm">
                <img
                  src={companyFive}
                  alt="company 5 logo"
                  title="Company 5 Logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-lg-2 companies__logo-box shadow-sm">
                <img
                  src={companySix}
                  alt="company 6 logo"
                  title="Company 6 Logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Companies;
