import React from "react";
import OurBusiness from "./about/OurBusiness";
import Operations from "./about/Operations";

const AboutPage = () => {
  return (
    <div className="about container-fluid">
      <div className="row text-center">
        <h1 className="display-2 fw-bold">About Us</h1>
        <div className="heading-line mb-1"></div>
      </div>

      <div className="container">
        <OurBusiness />
        <Operations />
      </div>
    </div>
  );
};

export default AboutPage;
