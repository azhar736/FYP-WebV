import React from "react";
import ABoutBanner from "../components/ABoutBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import VideoBanner from "../components/VideoBanner";

function Aboutus() {
  return (
    <>
      <Header />
      <div className="my-20">
        <Heading Title="About US" />
      </div>
      <ABoutBanner />
      <Footer />
    </>
  );
}

export default Aboutus;
