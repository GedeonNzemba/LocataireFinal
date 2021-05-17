import React from "react"
import Helmet from "react-helmet"
import "../styles/Locataire.css"
import "../fonts/gt super/stylesheet.css"
import "./realty_about_layout"
import ButtonOne from "./buttonOne"

export default function My_navbar() {
    return (
        <div className="realEstate">
            <nav className="realEstate_navigation">
          <div className="realEstate_logoWrap">
            <img src={require("../images/logo.png")} alt="Locataire logo"></img>
          </div>
          <div className="realEstate_navItem">
            <ul>
              <li>home</li>
              <li>real estate</li>
              <li>livestock</li>
              <li>risk management</li>
              <li>career</li>
            </ul>
          </div>
          <div className="realEstate_contactBtn">
            <ButtonOne />
          </div>
        </nav>
        </div>
    )
}