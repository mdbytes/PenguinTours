import React, { Component } from "react";
import GLightbox from "glightbox";
import videoImage from "../images/intro-section/video-image.png";
import nameLogo from "../images/name-image.png";
class LandingPage extends Component {
  componentDidMount() {
    const lightbox = GLightbox({
      href: "https://youtu.be/O8qilxaBR20",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoPlayVideos: "true",
    });
  }

  render() {
    return (
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 intros">
              <h1 className="display-2">
                <span>
                  <img src={nameLogo} alt="name logo" />
                </span>
                <br />
              </h1>
              <div id="intro">
                <span className="display-2--description lh-base">
                  Connecting penguins and people.
                  <br />
                  <br />A responsive layout demo by{" "}
                  <a href="https://mdbytes.com">
                    <span className="name-style">
                      <span className="logo-style">md </span>Bytes
                    </span>
                  </a>
                  .
                  <div className="mobileVisible">
                    <br />
                    <br />
                    <p>Watch our introductory video below.</p>
                  </div>
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
            </div>

            <div className="col-md-6 intros">
              <div className="video-box">
                <img
                  src={videoImage}
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
      </section>
    );
  }
}

export default LandingPage;
