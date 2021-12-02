import React, { Component } from "react";
import GLightbox from "glightbox";

import webDev from "../images/logo2.png";

class LandingPage extends Component {
  componentDidMount() {
    const lightbox = GLightbox({
      href: "https://youtu.be/iRO1P_ONNFQ",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoPlayVideos: "true",
    });
  }

  render() {
    return (
      <div>
        <section id="home" className="intro-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 intros">
                <h1 className="display-2">
                  <span className="display-2--intro">Welcome!</span>
                  <br />
                </h1>
                <span className="display-2--description lh-base">
                  This is a multi-purpose responsive layout used as a
                  site-building template at{" "}
                  <a href="https://mdbytes.com">
                    <span className="name-style">
                      <span className="logo-style">md </span>Bytes
                    </span>
                  </a>
                  .{" "}
                </span>

                <button
                  type="button"
                  className="glightbox rounded-pill btn-rounded"
                >
                  Watch Our Video{" "}
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>

              <div className="col-md-6 intros">
                <div className="video-box">
                  <img
                    src={webDev}
                    alt="video illustration"
                    className="img-fluid"
                  />

                  <button className="glightbox">
                    <span>
                      <i className="bi bi-play-circle-fill"></i>
                    </span>
                    <span className="border-animation border-animation--border-1"></span>
                    <span className="border-animation border-animation--border-2"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="0.1"
              d="M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,181.3C672,171,768,85,864,96C960,107,1056,213,1152,229.3C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
      </div>
    );
  }
}

export default LandingPage;
