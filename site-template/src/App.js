import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import Testimonials from "./components/TestimonialsPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "glightbox/dist/css/glightbox.css";
import "./css/App.css";

import "bootstrap/dist/js/bootstrap.js";
import "glightbox/dist/js/glightbox.js";
import FaqPage from "./components/FaqPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
