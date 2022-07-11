import React from "react";
import Photo from "../utilities/Photo";
import photoZero from "../images/about/leadership-0.jpg";
import photoOne from "../images/about/leadership-1.jpg";
import photoTwo from "../images/about/leadership-2.jpg";
import photoThree from "../images/about/leadership-3.jpg";
import photoFour from "../images/about/leadership-4.jpg";
import photoFive from "../images/about/leadership-5.jpg";
import photoSix from "../images/about/leadership-6.jpg";

const Leadership = () => {
  return (
    <div className="leadership">
      <h3 className="display-3">Founder and CEO</h3>
      <h4>Marty McPherson</h4>

      <div className="row">
        <div className="col-lg-3 image-holder">
          <Photo src={photoZero} alt="leader" className="img-fluid" />
        </div>
        <div className="col-lg-9 text-box">
          <p>
            Our founder, Marty McPherson, has been searching for penguins and
            sharing his experiences with others for decades. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Deserunt, asperiores porro
            ipsa culpa sequi voluptas commodi, vitae accusamus nesciunt ullam
            eius ipsum aliquid odit assumenda! Dolor iste, ad magni totam et
            tempora error, repudiandae exercitationem, repellat ex maxime sit
            veniam laudantium eum repellendus minima temporibus voluptate.
            Exercitationem aliquam earum dolor perspiciatis sed impedit
            obcaecati hic ipsa quasi maiores tenetur accusamus, reprehenderit
            architecto officiis at perferendis repudiandae delectus aut. Modi,
            iste?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="row">
            <h4>Milestones</h4>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">
                  Event<sup>*</sup>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1984</th>
                <td>B.S. University of Alaska</td>
              </tr>
              <tr>
                <th scope="row">1990</th>
                <td>Named captain of Arctic Fox</td>
              </tr>
              <tr>
                <th scope="row">1995</th>
                <td>Received manager job of arctic port.</td>
              </tr>
              <tr>
                <th scope="row">2001</th>
                <td>Appointed first mate of Greenland Arctic cruise line.</td>
              </tr>
              <tr>
                <th scope="row">2004</th>
                <td>Moved to Antarctica to work for Antarctic Cruise Co.</td>
              </tr>
              <tr>
                <th scope="row">2010</th>
                <td>Started Penguin Tours, Ltd.</td>
              </tr>
              <tr>
                <th scope="row">2017</th>
                <td>Named #1 tour company of Antarctica</td>
              </tr>
            </tbody>
            <tfoot>
              <th colspan="2">
                <br />
                <sup>*</sup>Fiction for illustration only.
              </th>
            </tfoot>
          </table>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <h4>Life of Arctic Navigator</h4>
          </div>
          <div
            class="card col-sm-12 col-lg-6 col-xl-4"
            style={{ float: "left" }}
          >
            <Photo src={photoOne} alt="leader" />
            <div class="card-body">
              <h5 class="card-title">Arctic Fox</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                ipsa quam, vel exercitationem
              </p>
            </div>
          </div>
          <div
            class="card col-sm-12 col-lg-6 col-xl-4"
            style={{ float: "left" }}
          >
            <Photo src={photoTwo} alt="leader" />
            <div class="card-body">
              <h5 class="card-title">Arctic Ports</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                accusamus beatae facere!
              </p>
            </div>
          </div>
          <div
            class="card col-sm-12 col-lg-6 col-xl-4"
            style={{ float: "left" }}
          >
            <Photo src={photoThree} alt="leader" />
            <div class="card-body">
              <h5 class="card-title">Greenland Cruise</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card col-sm-12 col-lg-6 col-xl-4"
            style={{ float: "left" }}
          >
            <Photo src={photoFour} alt="leader" />
            <div class="card-body">
              <h5 class="card-title">Arctic Hovercraft</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                illum. Eveniet, reprehenderit?
              </p>
            </div>
          </div>
          <div
            class="card col-sm-12 col-lg-6 col-xl-4"
            style={{ float: "left" }}
          >
            <Photo src={photoFive} alt="leader" />
            <div class="card-body">
              <h5 class="card-title">Antarctic</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis ex tempora nemo?
              </p>
            </div>
          </div>
          <div
            class="card col-sm-12 col-lg-6 col-xl-4"
            style={{ float: "left" }}
          >
            <Photo src={photoSix} alt="leader" />
            <div class="card-body">
              <h5 class="card-title">Antarctic Marina</h5>
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                beatae blanditiis non!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
