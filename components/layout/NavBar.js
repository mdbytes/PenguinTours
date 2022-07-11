import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const logo = "/images/android-chrome-192x192.png";

const NavBar = () => {
  const [path, setPath] = useState("");
  const { pathname } = useRouter();
  const homeLink = useRef();
  const aboutLink = useRef();
  const servicesLink = useRef();
  const testimonialsLink = useRef();
  const faqLink = useRef();
  const contactLink = useRef();

  useEffect(() => {
    if (pathname.includes("about")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.add("active");
      servicesLink.current.classList.remove("active");
      testimonialsLink.current.classList.remove("active");
      faqLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("services")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.add("active");
      testimonialsLink.current.classList.remove("active");
      faqLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("testimonials")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      testimonialsLink.current.classList.add("active");
      faqLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("faq")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      testimonialsLink.current.classList.remove("active");
      faqLink.current.classList.add("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("contact")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      testimonialsLink.current.classList.remove("active");
      faqLink.current.classList.remove("active");
      contactLink.current.classList.add("active");
    } else {
      homeLink.current.classList.add("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      testimonialsLink.current.classList.remove("active");
      faqLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    }
  }, [pathname]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
        <div className="container">
          <Link href="/" passHref>
            <div className="navbar-brand d-flex align-items-end">
              <Image height={35} width={35} src={logo} alt="logo" />
            </div>
          </Link>
          <button
            id="navToggler"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center ">
                <Link href="/">
                  <a ref={homeLink} className="nav-link active">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link href="/about">
                  <button
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ref={aboutLink}
                  >
                    About
                  </button>
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/about">
                      <a class="dropdown-item">Overview</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about/team/ceo">
                      <a class="dropdown-item">Leadership</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link href="/services">
                  <button
                    class="nav-link dropdown-toggle"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ref={servicesLink}
                  >
                    Services
                  </button>
                </Link>
                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <Link href="/services">
                      <a class="dropdown-item">Overview</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a class="dropdown-item">Tour Photo Gallery</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item d-flex align-items-center ">
                <Link href="/testimonials">
                  <a ref={testimonialsLink} className="nav-link">
                    Testimonials
                  </a>
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <Link href="/faq">
                  <a ref={faqLink} className="nav-link">
                    Faq
                  </a>
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center ">
                <Link href="/contact">
                  <a ref={contactLink} className="nav-link">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
