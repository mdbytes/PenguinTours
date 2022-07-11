import React from "react";
import Leadership from "./about/Leadership";

const AboutPage = () => {
  return (
    <div className="about container-fluid">
      <div className="row text-center">
        <h1 className="display-2 fw-bold">Leadership</h1>
        <div className="heading-line mb-1"></div>
      </div>

      <div className="container">
        <Leadership />
      </div>
    </div>
  );
};

export default AboutPage;
