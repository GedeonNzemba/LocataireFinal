import React from "react"
import "../styles/Locataire.css"

const ButtonEight = (props) => {

  

  return ( 
    // <a href="www.google.com" className="getStarted" style={{textDecoration: "none"}}>
    //     <button className="getStarted-btn " type="button" id="buttonSix">Get Started</button>
    // </a>
    <div className="button">
      <a href="www.google.com" className="btn-header btn--green-header">{props.name}</a>
    </div>
  )
}

export default ButtonEight