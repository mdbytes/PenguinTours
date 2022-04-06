import React, { Component } from "react";
import PortfolioDetail from "./PortfolioDetail";
import GLightBox from "./GLightBox";

const dt = new PortfolioDetail();

class PortfolioItems extends Component {
  render() {
    return <GLightBox elements={dt.elements} images={dt.images} />;
  }
}

export default PortfolioItems;
