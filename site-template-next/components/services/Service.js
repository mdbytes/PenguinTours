import React from "react";
import Link from "next/link";
import Image from "next/image";

const service = (serviceObj) => {
  return (
    <React.Fragment>
      <div
        className="col-lg-6 col-sm-12 col-xs-12 services-column"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="services__content">
          <div className="icon fas fa-paper-plane d-block"></div>
          <h3 className="display-3--title">{serviceObj.title}</h3>
          <p className="lh-lg">{serviceObj.description}</p>
          <div className="learn-btn">
            <Link href="/contact" passHref>
              <div
                type="button"
                className="rounded-pill btn-rounded border-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Learn More
                <span>
                  <i className="bi bi-envelope-fill"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
        <div className="services__pic">
          <Image
            src={serviceObj.image}
            alt="UI Design"
            className="img-fluid"
            width={600}
            height={400}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default service;
