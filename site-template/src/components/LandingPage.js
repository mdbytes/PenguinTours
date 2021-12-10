import React, { Component } from "react";
import GLightbox from "glightbox";
import videoImage from "../images/intro-section/video-image.png";
import nameLogo from "../images/name-image.png";
import tagLine from "../images/tagline.png";

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
            <div className="col-lg-6 intros">
              <h1 className="display-2">
                <span>
                  <img src={nameLogo} alt="name logo" />
                </span>
                <br />
              </h1>
              <div id="intro">
                <span className="display-2--description lh-base">
                  <div id="tagline">
                    <img src={tagLine} alt="tag line" />
                  </div>
                  <br />
                  <br />A site demo by{" "}
                  <a href="https://mdbytes.com">
                    <span className="name-style">
                      <span className="logo-style">md </span>Bytes
                    </span>
                  </a>
                </span>

                <button
                  type="button"
                  className="glightbox rounded-pill btn-rounded"
                >
                  Penguin Video{" "}
                  <span>
                    <i className="bi bi-play-fill"></i>
                  </span>
                </button>
              </div>
            </div>

            <div className="col-lg-6 intros">
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
