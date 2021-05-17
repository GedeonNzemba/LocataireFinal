import React, { useState, useEffect } from "react";
import "../../styles/Locataire.css";
import ButtonSix from "../buttonSix";
import ButtonSeven from "../buttonSeven";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import LightSpeed from "react-reveal/LightSpeed";
import config from "react-reveal/globals";
import Reveal from "react-reveal/Reveal";
import { Parallax } from "react-scroll-parallax";
import { Container, Row, Col } from "react-bootstrap";

export default function HeaderA() {
  config({ ssrFadeout: true });

  return (
    <>
      {/*Using Zoom Effect*/}
      <header className="risk-management__header" id="risk-bg">
        {/* <nav className="risk-management__navbar">
          <div className="risk-management_logoWrap">
            <img
              src={require("../../images/logo.png")}
              alt="Locataire logo"
              style={{ background: "white", backgroundSize: "100% 100%" }}
            ></img>
          </div> 
          <div id="risk-management__divider" />
          <ul>
            <li>home</li>
            <li>real estate</li>
            <li>livestock</li>
            <li>risk management</li>
            <li>career</li>
          </ul>
        </nav> */}

        <div className="wraper-header_content-risk">
          {/* 500 and down */}
          <Container id="risk-header_content-small">
            <Row>
              <Col
                id="risk-header_content-col-small"
                style={{ padding: "unset!important", width: "fit-content" }}
              >
                <div className="risk-management__header-content">
                  <div className="rs-subtitle">
                    <h3>audit & management</h3>
                    <hr id="risk-management__Textline" />
                  </div>
                  <LightSpeed ssrFadeout left>
                    <h1>
                      Enhance The Degree <br />
                      Of Confidence
                    </h1>
                  </LightSpeed>
                  <section id="risk-management__RightTopcontainer-tablet">
                    <div
                      className="risk-management__header-brief"
                      id="risk-management__header-brief"
                    >
                      <LightSpeed ssrFadeout right>
                        <p>
                          We provides tailored solutions to help private
                          companies improve business strategies and practices.
                        </p>
                      </LightSpeed>
                    </div>
                  </section>
                  <div className="risk-management__HeaderButton">
                    <ButtonSix name="Learn more" />
                    <div id="rs-line" />
                    <ButtonSeven name="Contact Us" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          {/* 500 and down ends*/}

          <div className="risk-management__leftWrap">
            {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure"> */}
            <div className="risk-management__header-content">
              <div className="rs-subtitle">
                <h3>audit & management</h3>
                <hr id="risk-management__Textline" />
              </div>
              <LightSpeed ssrFadeout left>
                <h1>
                  Enhance The Degree <br />
                  Of Confidence
                </h1>
              </LightSpeed>
              <section id="risk-management__RightTopcontainer-tablet">
                <div
                  className="risk-management__header-brief"
                  id="risk-management__header-brief"
                >
                  <LightSpeed ssrFadeout right>
                    <p>
                      We provides tailored solutions to help private companies
                      improve business strategies and practices.
                    </p>
                  </LightSpeed>
                </div>
              </section>
              <div className="risk-management__HeaderButton">
                <ButtonSix name="Learn more" />
                <div id="rs-line" />
                <ButtonSeven name="Contact Us" />
              </div>
            </div>
            {/* </Parallax> */}
            <div className="risk-management__header-rs_img">
              <Zoom>
                <div className="risk-management__header-rs_image" />
              </Zoom>
            </div>
          </div>
          <div className="header_content-inner-rightTop">
            <Container id="risk-header_img-tablet">
              <Row id="risk-header_img_row-tablet">
                <Zoom>
                  <div className="risk-management__header-rs_image" />
                </Zoom>
              </Row>
            </Container>
            <section id="risk-management__RightTopcontainer">
              <div
                className="risk-management__header-brief"
                id="risk-management__header-brief"
              >
                <LightSpeed ssrFadeout right>
                  <h2>Locataire Risk Management</h2>
                </LightSpeed>
                <p>
                  We provides tailored solutions to help private companies{" "}
                  <br />
                  improve business strategies and practices.
                </p>
              </div>
            </section>
            <Reveal effect="fadeInUp">
              <div className="risk-management__rightContent">
                <div className="risk-management__right_image" />
              </div>
            </Reveal>
          </div>
        </div>
      </header>
    </>
  );
}
