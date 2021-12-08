import React, { Component } from "react";

import { render, NavLink } from "react-router-dom";
import service from "./Service";
import servicesDetail from "./ServicesDetail";

class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="service-objects">
        {servicesDetail.map((obj) => (
          <React.Fragment>{service(obj)}</React.Fragment>
        ))}
      </div>
    );
  }
}

export default Services;
