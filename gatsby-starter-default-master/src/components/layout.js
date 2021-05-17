/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Navbar from "./Navbar";
import Contact from "./contact";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const addCSS = (url) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;

      document.head.appendChild(link);
    };

    const addJquery = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.head.appendChild(script);
    };

    const addWowSliderScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    };

    const addScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    };

    const addFlickity = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    };

    const addFlickityRisk = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    };

    const addFlickityParallax = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.lang = "javascript";
      script.async = true;
      document.body.appendChild(script);
    };

    const mountFlickityParallax = () => {
      const script = document.createElement("script");
      script.innerHTML = `
        var carousel = document.querySelectorAll(".main-carousel");
    for (let index = 0; index < carousel.length; index++) {

      var flkty = new Flickity(carousel[index], {
        imagesLoaded: true,
        percentPosition: false,
        draggable: true,
        wrapAround: true,
        autoPlay: true,
        initialIndex: 2,
        accessibility: true,
      });
      var imgs = carousel[index].querySelectorAll(".carousel-cell img");
      // get transform property
      var docStyle = document.documentElement.style;
      var transformProp =
        typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
  
      flkty.on("scroll", function () {
        flkty.slides.forEach(function (slide, i) {
          var img = imgs[i];
          var x = ((slide.target + flkty.x) * -1) / 3;
          img.style[transformProp] = "translateX(" + x + "px)";
        });
      });
    };
      `;
      script.async = true;
      document.body.appendChild(script);
    };

    // mountFlickityParallax();
    addFlickityRisk("https://npmcdn.com/flickity@2/dist/flickity.pkgd.js");
    addCSS("https://locataire.imfast.io/engine1/style.css");
    addJquery("https://locataire.imfast.io/engine1/jquery.js");
    addWowSliderScript("https://locataire.imfast.io/engine1/wowslider.js");
    addScript("https://locataire.imfast.io/engine1/script.js");
    addFlickity("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
    addFlickityParallax("https://gedeonnzemba.github.io/code/flickity.js");
  }, []);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div
        style={{
          margin: `0`,
          maxWidth: `100%`,
        }}
      >
        <main>{children}</main>
        <React.Fragment>
          <Contact />
        </React.Fragment>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
