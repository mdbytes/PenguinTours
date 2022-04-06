import React, { Component } from "react";

class PortfolioItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="portfolio-box">
          <img
            src={this.props.obj.image}
            alt={"portfolio item " + this.props.obj.slideLocation}
            title={"portfolio " + this.props.obj.slideLocation + " picture"}
            className="img-fluid"
          />
          <div className="portfolio-info">
            <div className="caption">
              <h4>{this.props.obj.title}</h4>
              <p>{this.props.obj.subTitle}</p>
              <p>
                <br />{" "}
                <button
                  className={
                    "photo-" + this.props.obj.slideLocation + " glightbox"
                  }
                  onClick={this.props.handleClickDisplay}
                >
                  Display In Gallery
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioItem;
