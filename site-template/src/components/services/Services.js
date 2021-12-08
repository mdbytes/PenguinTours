import React, { Component } from "react";

import service from "./Service";
import servicesDetail from "./ServicesDetail";

class Services extends Component {
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
