import React, { useEffect, useState } from "react";
import Seo from "./layout/Seo";
import Script from "next/script";
import Image from "next/image";

const videoImage = "/images/landing-page/video-image-small.jpeg";
const nameLogo = "/images/landing-page/name-image.png";
const tagLine = "/images/landing-page/tagline.png";

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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span>
                <Image
                  src={nameLogo}
                  alt="name logo"
                  objectFit="contain"
                  width={600}
                  height={100}
                />
              </span>
              <br />
            </h1>
            <div id="intro">
              <span className="display-2--description lh-base">
                <div
                  id="tagline"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  <Image src={tagLine} alt="tag line" width={500} height={75} />
                </div>
                <br />
                <br />A site demo by{" "}
                <a href="https://mdbytes.com">
                  <span className="name-style">
                    <span className="logo-style">md </span>Bytes
                  </span>
                </a>
              </span>

              <button type="button" className="rounded-pill btn-rounded">
                Penguin Video
                <span className="glightbox">
                  <i className="bi bi-play-fill"></i>
                </span>
              </button>
            </div>
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
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/glightbox-ssr@3.0.8/dist/js/glightbox.min.js" />
    </section>
  );
};

export default LandingPage;
