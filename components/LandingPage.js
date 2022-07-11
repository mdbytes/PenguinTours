import React, { useEffect, useState } from "react";
import Seo from "./layout/Seo";
import Script from "next/script";
import Image from "next/image";
import { FaAnchor } from "react-icons/fa";
import Photo from "./utilities/Photo";
import penguinSvg from "./images/pinguino.svg";

const videoImage = "/images/landing-page/video-image-small.jpeg";

const LandingPage = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const setupLightbox = () => {
      const lb = GLightbox({
        href: "https://youtu.be/O8qilxaBR20",
        type: "video",
        source: "youtube", //vimeo, youtube or local
        width: 1200,
        autoPlayVideos: "true",
        plyr: {
          config: {
            hideControls: true,
          },
        },
      });

      lb.on("close", () => {
        lb.close();
      });

      setLightbox(lb);
    };

    setTimeout(() => {
      setupLightbox();
    }, 500);
  }, []);

  const displayGallery = (evt) => {
    if (lightbox) {
      console.log("trying to show movie");
      console.log(GLightbox);
      console.log(typeof window);
      console.log(lightbox);

      lightbox.open();
    }
  };

  return (
    <section id="home" className="intro-section">
      <Seo title="Penguin Tours Ltd." />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 intros">
            <h1
              className="display-2"
              style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              Penguin Tours <i className="fa-solid fa-ship"></i>
            </h1>

            <span className="display-2--intro">Taking people to penguins</span>
            <span className="display-2--description">
              <br />A site demo by{" "}
              <a href="https://mdbytes.com">
                <span className="name-style">
                  <span className="logo-style">md </span>Bytes
                </span>
              </a>
            </span>
          </div>

          <div className="col-lg-6 intros">
            <div
              className="glightbox video-box"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={videoImage}
                alt="video illustration"
                className="img-fluid"
                width={400}
                height={300}
                loading="eager"
                layout="fixed"
              />

              <button>
                <span>
                  <i className="bi bi-play-circle-fill"></i>
                </span>
                <span className="border-animation border-animation--border-1"></span>
                <span className="border-animation border-animation--border-2"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 penguin-video-button">
            <button
              type="button"
              className="glightbox rounded-pill btn-rounded"
            >
              Penguin Video
              <span>
                <i className="bi bi-play-fill"></i>
              </span>
            </button>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/glightbox-ssr@3.0.8/dist/js/glightbox.min.js" />
    </section>
  );
};

export default LandingPage;
