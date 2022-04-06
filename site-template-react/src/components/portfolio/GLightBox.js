import React, { Component } from "react";
import GLightbox from "glightbox";
import PortfolioItem from "./PortfolioItem";

class GLightBox extends Component {
  constructor(props) {
    super(props);
    this.displayGallery = this.displayGallery.bind(this);
    this.handleClickDisplay = this.handleClickDisplay.bind(this);
  }

  handleClickDisplay(evt) {
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

    this.displayGallery(startingSlide);
  }

  displayGallery = (beginHere) => {
    const myGallery = GLightbox({
      elements: this.props.elements,
      autoplayVideos: false,
      startAt: beginHere,
      openEffect: "fade",
      closeEffect: "fade",
      zoomable: "true",
    });

    myGallery.on("close", () => {
      myGallery.close();
    });

    myGallery.open();
  };
  render() {
    console.log("props", this.props);
    return (
      <div className="row portfolio-items">
        {this.props.images.map((object) => (
          <div className="col-lg-6" key={object.slideLocation}>
            <PortfolioItem
              obj={object}
              handleClickDisplay={this.handleClickDisplay}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default GLightBox;
