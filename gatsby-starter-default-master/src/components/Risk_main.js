import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import RiskManagement from "./realty_riskManagement_layout";

const Risk_main = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  var siteBody = document.querySelector("body");
  var bodyLenght = siteBody.offsetHeight;
  console.log("The body height is: " + bodyLenght);

  // slide default width remover
  var loop;
  var arraySlide = document.querySelectorAll(".slick-slide");

  for (let loop = 0; loop < arraySlide.length; loop++) {
    arraySlide[loop].style.width = "unset";
    arraySlide[loop].style.marginLeft = "6rem";
    arraySlide[loop].style.marginRight = "6rem";
  }

  const renderContent = () => (
    <>
      <ParallaxProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/flickity@2/dist/flickity.min.css"
          />
        </Helmet>

        <RiskManagement />
      </ParallaxProvider>
    </>
  );

  return (
    // <section className="Parallax">
    //   <div
    //     className="Parallax__background"
    //     style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
    //   />
    //   <div
    //     className="Parallax__background-triangles"
    //     id
    //     style={{
    //       transform: `translateY(${offsetY * 0.8}px)`,
    //     }}
    //   />
    //   <div className="Parallax__content">{renderContent()}</div>
    // </section>
    <div className="Parallax__content">{renderContent()}</div>
  );
};

export default Risk_main;
