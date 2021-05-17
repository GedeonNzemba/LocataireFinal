import React from "react";
import "../../styles/Locataire.css";
import ButtonSix from "../buttonSix";
import ButtonSeven from "../buttonSeven";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import LightSpeed from "react-reveal/LightSpeed";
import config from "react-reveal/globals";
import Reveal from "react-reveal/Reveal";

export default function HeaderB() {
  return (
    <header className="risk-management__header" id="risk-bg-2">
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
        <div className="risk-management__leftWrap">
          <div className="risk-management__header-content">
            <div className="rs-subtitle">
              <h3>audit & management</h3>
              <hr id="risk-management__Textline" />
            </div>
            <LightSpeed ssrFadeout left>
              <h1>
                Services to Grow <br />
                Your Business
              </h1>
            </LightSpeed>
            <div className="risk-management__HeaderButton">
              <ButtonSix name="Learn more" />
              <div id="rs-line" />
              <ButtonSeven name="Contact Us" />
            </div>
          </div>
          <div className="risk-management__header-rs_img">
            <Zoom>
              <div className="risk-management__header-rs_image" />
            </Zoom>
          </div>
        </div>
        <div className="header_content-inner-rightTop">
          <section id="risk-management__RightTopcontainer">
            <div
              className="risk-management__header-brief"
              id="risk-management__header-brief"
            >
              <LightSpeed ssrFadeout right>
                <h2>Locataire Risk Management</h2>
              </LightSpeed>
              <p>
                We provides tailored solutions to help private companies <br />
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
  );
}
