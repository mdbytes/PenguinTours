import React from "react";
import Photo from "../utilities/Photo";
import aboutOne from "../images/about/about-1.jpeg";

const OurBusiness = () => {
  return (
    <div className="row">
      <div className="col-lg-7">
        <h3 className="display-3">Our Business</h3>
        <div className="text-box">
          <p>
            People from around the world trust us to take them into Antarctica
            for penguin adventures. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque quam sit in, nemo voluptatum repudiandae
            numquam veritatis architecto exercitationem, recusandae
            reprehenderit voluptatibus quia dicta voluptate enim obcaecati ipsa
            iure non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste
            minima, sit veritatis sed incidunt cum natus dolores dolorum illum
            aliquid corrupti culpa porro dolorem ea quas dicta. Facilis porro
            amet cumque error cum, repudiandae cupiditate enim, dolorem deserunt
            laborum doloribus dolorum neque provident aliquam asperiores nostrum
            consequuntur atque recusandae? Reiciendis fugiat mollitia tempore
            dolor enim illum itaque. Quibusdam animi nemo laudantium modi nobis
            veniam dicta perspiciatis voluptatibus pariatur at. Assumenda et
            nisi ab vitae ipsum ut, voluptatibus mollitia? Suscipit commodi
            corrupti voluptatem quas voluptas minima quisquam impedit,
            doloremque saepe quaerat! Recusandae officiis dignissimos expedita
            error culpa quibusdam facere pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
            consectetur delectus, deleniti aliquid, ipsum atque voluptate ab
            quaerat reprehenderit hic nesciunt aliquam, odio accusantium!
          </p>
        </div>
      </div>
      <div className="col-lg-5 business-image-holder">
        <Photo
          src={aboutOne}
          className="img-fluid standard-image"
          alt="our business"
        />
      </div>
    </div>
  );
};

export default OurBusiness;
