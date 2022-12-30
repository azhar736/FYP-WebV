import React from "react";
import ABoutBanner from "../components/ABoutBanner";
import AboutText from "../components/AboutText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import VideoBanner from "../components/VideoBanner";

function Aboutus() {
  return (
    <>
      <h1>About Page</h1>
      <Header />
      <div className="my-24">
        <Heading Title="About US" />
      </div>
      <AboutText />
      <div className="flex items-center justify-center">
        <VideoBanner />
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
