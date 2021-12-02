import React, { Component } from "react";

import Companies from "./Companies";

import clientOne from "../images/testimonials/client-1.jpg";
import clientTwo from "../images/testimonials/client-2.png";
import clientThree from "../images/testimonials/client-3.png";
import clientFour from "../images/testimonials/client-4.png";

import logoTest from "../images/logo2sm.png";

class Testimonials extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <section className="testimonials" id="testimonials">
          <div id="testimonials-bookmark" className="row"></div>
          <div className="container">
            <div className="row text-center text-white">
              <h1 className="display-3 fw-bold">
                Testimonials
                <img src={logoTest} alt="logo" />
              </h1>
              <hr className="mx-auto" />
              <p className="lead pt-1">what our clients are saying</p>
            </div>
            <div className="row align-items-center">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonials__card">
                      <p className="lh-lg">
                        "Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est repudiandae rerum, harum temporibus impedit
                        voluptatem, iusto aperiam suscipit dolorem consectetur
                        rem?"
                      </p>
                      <div className="ratings">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonials__picture">
                      <img
                        src={clientOne}
                        alt="client-1 "
                        className="rounded-circle img-fluid"
                      />
                    </div>
                    <div className="testimonials__name">
                      <h3>Patrick Demby</h3>
                      <p className="fw-light">IT Innovator</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testimonials__card">
                      <p className="lh-lg">
                        "Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est repudiandae rerum, harum temporibus impedit
                        voluptatem, iusto aperiam suscipit dolorem consectetur
                        rem?"
                        <i className="fas fa-quote-right"></i>
                      </p>
                      <div className="ratings">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonials__picture">
                      <img
                        src={clientThree}
                        alt="client-3"
                        className="rounded-circle img-fluid"
                      />
                    </div>
                    <div className="testimonials__name">
                      <h3>Joy Fitsimmons</h3>
                      <p className="fw-light">Finance Manager</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testimonials__card">
                      <p className="lh-lg">
                        " Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est repudiandae rerum, harum temporibus impedit
                        voluptatem, iusto aperiam suscipit dolorem consectetur
                        rem?"
                      </p>
                      <div className="ratings">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonials__picture">
                      <img
                        src={clientTwo}
                        alt="client-2 "
                        className="rounded-circle img-fluid"
                      />
                    </div>
                    <div className="testimonials__name">
                      <h3>Charlie Foglestock</h3>
                      <p className="fw-light">Global Finance Manager</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testimonials__card">
                      <p className="lh-lg">
                        " Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est repudiandae rerum, harum temporibus impedit
                        voluptatem, iusto aperiam suscipit dolorem consectetur
                        rem?"
                      </p>
                      <div className="ratings">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                    <div className="testimonials__picture">
                      <img
                        src={clientFour}
                        alt="client-4 "
                        className="rounded-circle img-fluid"
                      />
                    </div>
                    <div className="testimonials__name">
                      <h3>Claire Williams</h3>
                      <p className="fw-light">CEO and Founder</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-outline-light"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button
                    className="btn btn-outline-light"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonials;
