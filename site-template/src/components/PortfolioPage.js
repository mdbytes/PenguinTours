import React, { Component } from "react";

import portfolioOne from "../images/portfolio/p01.jpeg";
import portfolioTwo from "../images/portfolio/p02.jpeg";
import portfolioThree from "../images/portfolio/p03.JPG";
import portfolioFour from "../images/portfolio/p04.jpeg";
import portfolioFive from "../images/portfolio/p05.jpeg";
import portfolioSix from "../images/portfolio/p06.JPG";
import portfolioSeven from "../images/portfolio/p07.png";
import portfolioEight from "../images/portfolio/p08.png";
import portfolioNine from "../images/portfolio/p09.png";
import portfolioTen from "../images/portfolio/p10.jpeg";

import logoPort from "../images/logo2sm.png";

class PortfolioPage extends Component {
  componentDidMount() {}
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row text-center mt-5">
            <h1 className="display-3 fw-bold text-capitalize">
              Latest Work
              <img src={logoPort} alt="logo" />
            </h1>
            <div className="heading-line"></div>
            <p className="lead">Here's a little of what's been going on...</p>
            <p class="mobilePresent">
              Tap on any image for additional details.
            </p>
            <p class="largePresent">
              Hover over any image for additional details.
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
            <div className="row">
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
                      <h4>Feedback Focus</h4>
                      <p>Email Survey Automation</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a
                          href="https://customer-email-response-app.herokuapp.com/"
                          target="_blank"
                        >
                          online
                        </a>
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
                      <h4>Careers</h4>
                      <p>Employment Application</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="http://careers.mdbytes.us/" target="_blank">
                          online
                        </a>
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
                      <h4>Juntos</h4>
                      <p>Social Media Site</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="http://juntos.mdbytes.us/" target="_blank">
                          online
                        </a>
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
                      <h4>Wild Things Nature Photography</h4>
                      <p>A WordPress Original Theme</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="http://gowildthings.com" target="_blank">
                          online
                        </a>
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
                      <h4>Vidly Video</h4>
                      <p>Video Streaming Service Front End</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a
                          href="http://vidly001-dev.us-east-2.elasticbeanstalk.com/"
                          target="_blank"
                        >
                          online
                        </a>
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
                      <h4>
                        <span class="logo-style">md</span> Bytes Blog
                      </h4>
                      <p>An Open Source Blog Project</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="http://blog.mdbytes.us" target="_blank">
                          online
                        </a>
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
                      <h4>ChatApp</h4>
                      <p>Secure Instant Messaaging</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a
                          href="https://mdbytes-chat-app.herokuapp.com/"
                          target="_blank"
                        >
                          online
                        </a>
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
                      <h4>MIREFA</h4>
                      <p>Ministry Site in Spanish</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="https://mirefa.org" target="_blank">
                          online
                        </a>
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
                      <h4>The Bird</h4>
                      <p>Responsive Social Media Site</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="https://bird.mdbytes.us" target="_blank">
                          online
                        </a>
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
                      <h4>Primal Strength</h4>
                      <p>Another WordPress Original Theme</p>
                      <p>
                        Visit:
                        <br />{" "}
                        <a href="https://goprimalstrength.com" target="_blank">
                          online
                        </a>
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
