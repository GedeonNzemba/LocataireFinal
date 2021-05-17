import React, { Component, useEffect } from "react";
import "../styles/Locataire.css";
import "../styles/hover.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import ButtonSix from "./buttonSix";
// anime
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
// anime end
import ButtonSeven from "./buttonSeven";
import RealEstate from "../pages/RealEstate";
import ServiceMain from "./Slidercp/ServiceMain";
// import Content from "./Content.js";
import Slider from "./Slider";
import HeaderA from "./Slidercp/HeaderA";
import HeaderB from "./Slidercp/HeaderB";
import { Helmet } from "react-helmet";
import $ from "jquery";
import RiskContent from "./RiskContent";

const components = [<HeaderA />, <HeaderB />];
export default function RealtyRiskManagementLayout() {
  useEffect(() => {
    var tagName = document.querySelector(".Parallax__content div");
    tagName.style.width = "100%";
    var tagNameb = document.querySelector(".Parallax__content div div");
    tagNameb.classList.add("background-img");
    tagNameb.style.borderBottomRightRadius = "25% 50%";
    tagNameb.style.backgroundSize = "100% 140%";
    tagNameb.style.backgroundRepeat = "no-repeat";
  }, []);

  return (
    <ScrollContainer>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://npmcdn.com/flickity@2/dist/flickity.css"
        />
      </Helmet>
      {/* header slider */}
      <div>
        <div
          className="flikislide"
          style={{ display: "flex", justifyContent: "space-between" }}
        />
        <Slider
          options={{
            autoPlay: false,
            pauseAutoPlayOnHover: true,
            parallax: true,
            fullscreen: true,
            adaptiveHeight: false,
            imagesLoaded: true,
            prevNextButtons: false,
            pageDots: false,
          }}
        >
          {components.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
          ))}
        </Slider>
      </div>
      {/* header slider ends */}
      {/* new content */}
      <RiskContent />
      {/* <RiskContent /> */}

      {/* new content ends here */}
      {/* appointment */}
      <div className="rs__appointement" style={{ marginTop: "25rem" }}>
        <div className="rs__appointement-wrap">
          <section>
            <div className="rs__appointement-bg" />
            <div className="rs__appointement-content">
              <div className="rs__appointement-content_Toptext">
                <h3>improve business strategies and practices</h3>
                <hr id="rs__appointement-line" />
              </div>
              <div className="rs__appointement-content_bottom">
                <Container>
                  <Row>
                    <Col>
                      <h1>Contact Us TODAY!</h1>
                      <p>
                        Locataire Risk Management provides tailored solutions to
                        help private <br />
                        companies improve business strategies and practices
                      </p>
                      <p>
                        Our objective is to help our clients achieve what is
                        important to them.
                      </p>
                    </Col>
                    <Col>
                      <div className="rs__appointement-content_button">
                        <ButtonSix name="Contact Us" />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* appointment end */}

      {/* service */}
      <div className="risk-management__services">
        <div className="risk-management__services-header">
          <h1>our services</h1>
        </div>

        <div className="risk-management__services-container">
          <ServiceMain />
        </div>
      </div>
      {/* service ends */}

      {/* 1280px and less ENDS*/}
    </ScrollContainer>
  );
}
