import React from "react";
import Photo from "../utilities/Photo";
import serviceCenterPhoto from "../images/about/call-center.jpg";
import hotelPhoto from "../images/about/hotel.jpg";
import boatPhoto from "../images/about/boat.jpeg";
import teamPhoto from "../images/about/team.jpg";

const Operations = () => {
  return (
    <div className="operations">
      <h3 className="display-3">Operations</h3>
      <div className="row">
        <div className="col-lg-3 image-holder">
          <Photo
            src={serviceCenterPhoto}
            alt="service center"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-9">
          <h4>Service Center</h4>
          <p className="text-box">
            Our 24 hour call center is always available to assist you. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod
            consequuntur ea perspiciatis vero veritatis! Tempora, recusandae?
            Beatae, commodi quos? Pariatur magnam, dolores laboriosam quis
            blanditiis quia animi deleniti nisi impedit quo illum a est sequi
            fugit, repellendus culpa! Voluptatem doloremque saepe suscipit quo
            quia? Explicabo, saepe? Quo eveniet odio facilis amet recusandae aut
            voluptates dolorum nam sequi reprehenderit et laboriosam impedit,
            tenetur voluptate. Totam sed maiores facere et quis suscipit optio
            amet, nobis velit omnis illum sapiente qui praesentium delectus
            molestias alias doloremque deleniti culpa, illo voluptate harum
            distinctio ipsa! Totam vel autem saepe eos asperiores harum, illum
            quos?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 image-holder">
          <Photo src={hotelPhoto} alt="service center" className="img-fluid" />
        </div>
        <div className="col-lg-9">
          <h4>Hotel</h4>
          <p className="text-box">
            Before our penguin voyage and after returning, you will stay at our
            hotel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            nisi autem, temporibus error, neque repudiandae quia ipsam eos quis
            reiciendis et corporis architecto. Ipsum voluptas hic excepturi
            repellat maxime cumque, recusandae incidunt eius molestiae vel id
            perferendis, exercitationem dicta sapiente quisquam praesentium
            corrupti, molestias quo. Eaque, quo reprehenderit dolorum qui, enim
            accusantium voluptate aperiam recusandae natus atque porro ipsam
            pariatur eum. Labore architecto voluptatum blanditiis consequatur
            sit nobis magnam itaque. Vel officia aspernatur, laborum laudantium
            nemo eius sint alias ullam rerum facere quisquam consectetur
            voluptatibus ipsam explicabo pariatur vero qui quibusdam sequi? Eum
            unde exercitationem quo tempore at, deserunt consequuntur.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 image-holder">
          <Photo src={boatPhoto} alt="service center" className="img-fluid" />
        </div>
        <div className="col-lg-9">
          <h4>Boat</h4>
          <p className="text-box">
            Of course, you will be aboard the SS Penguin for your tour. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos amet, in
            accusantium enim eos asperiores rem ullam ea optio hic inventore
            sint tempora ratione deserunt dolore commodi expedita dolores
            laboriosam culpa officia sit facilis reiciendis nostrum! Minus vel
            earum laudantium officia expedita magni alias rerum harum quis
            praesentium sint enim placeat, laborum sed doloribus accusamus
            nesciunt numquam. Vitae error voluptas blanditiis labore explicabo
            et delectus cumque dolores unde, soluta itaque cupiditate? Aut amet,
            accusantium est voluptatem minima qui, aperiam possimus architecto
            commodi earum repellendus eveniet! Itaque, mollitia dolorem quam,
            explicabo aliquid sequi dolorum maxime labore vitae, cumque
            obcaecati voluptatibus qui.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 image-holder">
          <Photo src={teamPhoto} alt="service center" className="img-fluid" />
        </div>
        <div className="col-lg-9">
          <h4>Team</h4>
          <p className="text-box">
            Our team spends all year exploring Antarctica to find the latest hot
            spots for penguins. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias totam et quas? Eum accusantium consectetur
            ut aliquid eveniet unde obcaecati nisi. Nihil dolorem at officiis
            pariatur blanditiis, libero recusandae obcaecati aliquid cupiditate
            optio quae odio autem! Quae veritatis labore odit distinctio illum
            quo non harum. Minima dignissimos tempora, rerum atque nulla in
            recusandae laborum accusamus officia facere reprehenderit non quas
            exercitationem animi libero voluptatem deserunt quibusdam.
            Accusantium placeat earum ut amet molestiae neque nesciunt commodi
            tenetur cum? Molestiae sint numquam, illum asperiores impedit dicta
            dolor recusandae quia, cumque, voluptatum aliquam provident in
            officia esse reiciendis eveniet! Iusto vitae quos excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Operations;
