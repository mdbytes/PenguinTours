import React, { Component } from "react";
import Image from "next/image";

const PortfolioItem = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="portfolio-box">
        <Image
          width={1600}
          height={900}
          src={props.obj.image}
          alt={"portfolio item " + props.obj.slideLocation}
          title={"portfolio " + props.obj.slideLocation + " picture"}
          className="img-fluid"
        />
        <div className="portfolio-info">
          <div className="caption">
            <h4>{props.obj.title}</h4>
            <p>{props.obj.subTitle}</p>
            <p>
              <br />{" "}
              <button
                className={"photo-" + props.obj.slideLocation + " glightbox"}
                onClick={props.handleClickDisplay}
              >
                display full screen
              </button>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioItem;
