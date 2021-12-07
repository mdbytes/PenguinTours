import React, { Component } from "react";

import portfolioOne from "../images/portfolio/portfolio-1.png";
import portfolioTwo from "../images/portfolio/portfolio-2.png";
import portfolioThree from "../images/portfolio/portfolio-3.png";
import portfolioFour from "../images/portfolio/portfolio-4.png";
import portfolioFive from "../images/portfolio/portfolio-5.png";
import portfolioSix from "../images/portfolio/portfolio-6.png";
import portfolioSeven from "../images/portfolio/portfolio-7.png";
import portfolioEight from "../images/portfolio/portfolio-8.png";
import portfolioNine from "../images/portfolio/portfolio-9.png";
import portfolioTen from "../images/portfolio/portfolio-10.png";

import GLightbox from "glightbox";

import logoPort from "../images/logo.png";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.startZero = this.startZero.bind(this);
    this.displayGallery = this.displayGallery.bind(this);
  }

  state = {
    startHere: 99,
  };

  startZero = () => {
    //this.setState({ startHere: 0 });
    this.displayGallery(0);
  };

  displayGallery = (evt) => {
    console.dir(evt.target);

    let targetButtonClass = evt.target.className;

    console.log(targetButtonClass);

    let startingSlide = 9;

    if (targetButtonClass.includes("photo-0")) {
      startingSlide = 0;
    } else if (targetButtonClass.includes("photo-1")) {
      startingSlide = 1;
    } else if (targetButtonClass.includes("photo-2")) {
      startingSlide = 2;
    } else if (targetButtonClass.includes("photo-3")) {
      startingSlide = 3;
    } else if (targetButtonClass.includes("photo-4")) {
      startingSlide = 4;
    } else if (targetButtonClass.includes("photo-5")) {
      startingSlide = 5;
    } else if (targetButtonClass.includes("photo-6")) {
      startingSlide = 6;
    } else if (targetButtonClass.includes("photo-7")) {
      startingSlide = 7;
    } else if (targetButtonClass.includes("photo-8")) {
      startingSlide = 8;
    } else if (targetButtonClass.includes("photo-9")) {
      startingSlide = 9;
    }

    const myGallery = GLightbox({
      elements: [
        {
          href: portfolioOne,
          type: "image",
        },
        {
          href: portfolioTwo,
          type: "image",
        },
        {
          href: portfolioThree,
          type: "image",
        },
        {
          href: portfolioFour,
          type: "image",
        },
        {
          href: portfolioFive,
          type: "image",
        },
        {
          href: portfolioSix,
          type: "image",
        },
        {
          href: portfolioSeven,
          type: "image",
        },
        {
          href: portfolioEight,
          type: "image",
        },
        {
          href: portfolioNine,
          type: "image",
        },
        {
          href: portfolioTen,
          type: "image",
        },
      ],
      autoplayVideos: false,
      startAt: startingSlide,
      openEffect: "fade",
      closeEffect: "fade",
      zoomable: "true",
    });

    myGallery.on("close", () => {
      myGallery.close();
    });

    myGallery.open();
  };

  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row text-center mt-5">
            <h1 className="display-3 fw-bold text-capitalize">
              Photo Gallery
              <img src={logoPort} alt="logo" />
            </h1>
            <div className="heading-line"></div>
            <p className="lead">Here's a little of what's been going on...</p>
            <p className="mobilePresent">
              Tap on any image to display in full screen gallery.
            </p>
            <p className="largePresent">
              Hover over any image to display in full screen gallery.
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
                Web Applications
              </button>
            </div>
            <div className="row portfolio-items">
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioOne}
                    alt="portfolio 1 picture"
                    title="portfolio 1 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Navigating Glaciers</h4>
                      <p>To Penguin Territory</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-0 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioTwo}
                    alt="portfolio 2 picture"
                    title="portfolio 2 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Close Encounters</h4>
                      <p>Of the Penguin Kind</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-1 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display in Gallery
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioThree}
                    alt="portfolio 3 picture"
                    title="portfolio 3 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Penguin Community</h4>
                      <p>At Feeding Sites</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-2 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioFour}
                    alt="portfolio 4 picture"
                    title="portfolio 4 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>The Circle of Life</h4>
                      <p>With Penguin Babies</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-3 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioFive}
                    alt="portfolio 5 picture"
                    title="portfolio 5 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Penguin Journeys</h4>
                      <p>Hundreds of Miles</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-4 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioSix}
                    alt="portfolio 6 picture"
                    title="portfolio 6 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Solo Encounters</h4>
                      <p>With a Communal Bird</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-5 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box ">
                  <img
                    src={portfolioSeven}
                    alt="portfolio 7 picture"
                    title="portfolio 7 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Growing Up Penguin</h4>
                      <p>Constant Shelter and Support</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-6 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioEight}
                    alt="portfolio 8 picture"
                    title="portfolio 8 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Penguin Games</h4>
                      <p>For Survival Itself</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-7 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioNine}
                    alt="portfolio 9 picture"
                    title="portfolio 9 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Penguin Heights</h4>
                      <p>Incredible Destinations</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-8 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-box">
                  <img
                    src={portfolioTen}
                    alt="portfolio 9 picture"
                    title="portfolio 9 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>Summer in Antarctica</h4>
                      <p>Warmer and Less Snow</p>
                      <p>
                        <br />{" "}
                        <button
                          className="photo-9 glightbox"
                          onClick={this.displayGallery}
                        >
                          Display In Gallery
                        </button>{" "}
                      </p>
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
