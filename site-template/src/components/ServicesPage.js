import React, { Component } from "react";

import imageOne from "../images/services/UI_design _Isometric.png";
import imageTwo from "../images/services/Code_Development _Isometric.png";
import imageThree from "../images/services/Data_storage_Isometric.png";

import logoSvc from "../images/logo2sm.png";

class ServicesPage extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }
  componentDidMount() {}

  buttonClick = () => {
    document.querySelector("#contactLink").click();
  };

  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold">
              Our Services
              <img src={logoSvc} alt="logo" />
            </h1>
            <div className="heading-line mb-1"></div>
          </div>

          <div className="row pt-2 mt-1 mb1">
            <div className="col-md-6 border-right">
              <div className="bg-white p-3">
                <h4 className="">
                  <br />
                  <div>
                    <div className="service-item row">
                      <div className="col-1">
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="col-11">
                        Designing user friendly applications
                      </div>
                    </div>
                    <div className="service-item row">
                      <div className="col-1">
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="col-11">Developing code efficiently</div>
                    </div>

                    <div className="service-item row">
                      <div className="col-1">
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="col-11">
                        Deploying to a broad range of internet infrastructures
                      </div>
                    </div>
                  </div>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white p-4 text-start">
                <p className="fw-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 services mt-2">
              <div className="services__content">
                <div className="icon fas fa-paper-plane d-block"></div>
                <h3 className="display-3--title">UI Design</h3>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consequatur placeat numquam voluptate a, dicta corrupti
                  aspernatur doloremque libero laborum? Accusamus quae, eos
                  excepturi porro quia alias magni!
                </p>
                <button
                  onClick={this.buttonClick}
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn More
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 services mt-2">
              <div className="services__pic">
                <img src={imageOne} alt="UI Design" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 services mt-2">
              <div className="services__pic">
                <img
                  src={imageTwo}
                  alt="web development"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 services mt-2">
              <div className="services__content">
                <div className="icon fas fa-code d-block"></div>
                <h3 className="display-3--title">Web Development</h3>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consequatur placeat numquam voluptate a, dicta corrupti
                  aspernatur doloremque libero laborum? Accusamus quae, eos
                  excepturi porro quia alias magni!
                </p>
                <button
                  onClick={this.buttonClick}
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn More
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 services mt-2">
              <div className="services__content">
                <div className="icon fas fa-cloud-upload-alt d-block"></div>
                <h3 className="display-3--title">Deployment</h3>
                <p className="lh-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime consequatur placeat numquam voluptate a, dicta corrupti
                  aspernatur doloremque libero laborum? Accusamus quae, eos
                  excepturi porro quia alias magni!
                </p>
                <button
                  onClick={this.buttonClick}
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn More
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 services mt-2">
              <div className="services__pic">
                <img src={imageThree} alt="cloud" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesPage;
