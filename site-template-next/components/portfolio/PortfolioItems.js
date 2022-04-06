import React, { useState } from "react";
import PortfolioDetail from "./PortfolioDetail";
import PortfolioItem from "./PortfolioItem";

const dt = new PortfolioDetail();

const PortfolioItems = () => {
  const [startingSlide, setStartingSlide] = useState(9);

  const displayGallery = (evt) => {
    if (typeof window !== "undefined") {
      console.log("trying to render");

      let targetButtonClass = evt.target.className;

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

      const myGallery = GLightbox({
        elements: dt.elements,
        autoplayVideos: false,
        startAt: startingSlide,
        openEffect: "fade",
        closeEffect: "fade",
        zoomable: "true",
      });

      myGallery.on("close", () => {
        myGallery.close();
      });

      myGallery.open();
    }
  };

  return (
    <div className="row portfolio-items">
      {dt.images.map((object) => (
        <div className="col-lg-6" key={object.slideLocation}>
          <PortfolioItem
            obj={object}
            elements={dt.elements}
            handleClickDisplay={displayGallery}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioItems;
