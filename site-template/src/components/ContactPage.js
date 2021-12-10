import React, { Component } from "react";

import logoCon from "../images/logo.jpeg";

class ContactPage extends Component {
  state = {
    timesRun: 0,
  };

  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  componentWillUnmount() {}

  render() {
    return (
      <section id="contact" className="get-started">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-capitalize">
              Get Started
              <img src={logoCon} alt="logo" />
            </h1>
            <div className="heading-line"></div>
            <p className="lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              optio aspernatur architecto?
            </p>
          </div>

          <div className="row text-white">
            <div className="col-12 col-lg-6 ">
              <div className="cta-info w-100">
                <h4 className="display-4 fw-bold">Satisfaction Guaranteed</h4>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia quaerat eos vel totam fuga alias ea labore eius, quae
                  architecto accusantium.
                </p>
                <h3 className="display-3--brief">What is the next step?</h3>
                <ul className="cta-info__list">
                  <li>Let us know you are interested</li>
                  <li>We'll prepare a proposal</li>
                  <li>
                    We'll discuss the proposal and plan the trip of your dreams
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="form w-100 pb-2">
                <h4 className="display-3--title mb-5">Plan Your Tour</h4>
                <form action="#" className="row">
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      id="inputFirstName"
                      className="form-control form-control-lg shadow"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="inputLastName"
                      className="form-control form-control-lg shadow"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      id="inputEmailAddress"
                      className="form-control form-control-lg shadow"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                      placeholder="Describe what you want to see, where you want to go.."
                      name="message"
                      id="message"
                      rows="8"
                      className="form-control form-control-lg shadow"
                    ></textarea>
                  </div>
                  <div className="text-center d-grid mt-1">
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill pt-3 pb-3"
                    >
                      Submit <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPage;
