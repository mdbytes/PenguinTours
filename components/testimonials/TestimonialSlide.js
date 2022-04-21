import React from "react";
import getStars from "./GetStars";
import Image from "next/image";

const testimonialSlide = (obj) => {
  return (
    <React.Fragment>
      <div className="testimonials__card">
        <p className="lh-lg">{obj.comments}</p>
        <div className="ratings">{getStars(obj)}</div>
      </div>
      <div className="testimonials__picture">
        <Image
          height={75}
          width={75}
          src={obj.image}
          alt="client-1 "
          className="rounded-circle img-fluid"
        />
      </div>
      <div className="testimonials__name">
        <h3>{obj.name}</h3>
        <p className="fw-light">{obj.jobTitle}</p>
      </div>
    </React.Fragment>
  );
};

export default testimonialSlide;
