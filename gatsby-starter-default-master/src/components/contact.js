import React, { useState } from "react";
import "../styles/Locataire.css";
import Footer from "./footer";
import axios from "axios";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Input from "./input";

const Contact = (props) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const firstnameHandler = (evt) => {
    const value = evt.target.value;
    setFirstname(value);
  };
  const surnameHandler = (evt) => {
    const value = evt.target.value;
    setSurname(value);
  };
  const emailHandler = (evt) => {
    const value = evt.target.value;
    setEmail(value);
  };
  const messageHandler = (evt) => {
    const value = evt.target.value;
    setMessage(value);
  };

  const data = useStaticQuery(graphql`
    query {
      contactMap: file(relativePath: { eq: "contactMap.png" }) {
        childImageSharp {
          fluid(maxWidth: 525, maxHeight: 501) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="contactFormWrapper">
      {/* <SVG
        style={[styles.svgBase, styles.svgContact, styles.svgContactOne].join(
          " "
        )}
        id="Path_424"
        d="M293.662,245.175C291.509,274.22,290,386.733,128.782,465.643"
        transform="translate(-128.562 -245.138)"
        width="165.599"
        height="220.954"
        viewBox="0 0 165.599 220.954"
        ref={svgContactOne}
        animateF={props.animateF}
        time={props.svgStartTime || 500}
      />
      <SVG
        style={[styles.svgBase, styles.svgContact, styles.svgContactTwo].join(
          " "
        )}
        id="Path_424"
        d="M198.572,168.08S270.043,395.553,685.385,476.2"
        transform="translate(-198.095 -167.93)"
        width="487.386"
        height="308.764"
        viewBox="0 0 487.386 308.764"
        ref={svgContactTwo}
        animateF={props.animateF}
        time={props.svgStartTime+1000 || 1000}
      />
      <SVG
        style={[styles.svgMobileBase, styles.svgMobileContact, styles.svgMobileContactOne].join(
          " "
        )}
        id="_9"
        d="M0,0C47.232,21.432,87.789,35.336,135.58,32.086" transform="matrix(0.777, -0.629, 0.629, 0.777, 0.447, 85.698)"
        width="126.631" height="111.505" viewBox="0 0 126.631 111.505"
        ref={svgMobileContactOne}
        animateF={props.animateF}
        time={props.svgStartTime || 500}
      />
      <SVG
        style={[styles.svgMobileBase, styles.svgMobileContact, styles.svgMobileContactTwo].join(
          " "
        )}
        id="_10"
        d="M224.629,0C209.51,30.667,162.071,55.228,46.761,79.481Q23.37,84.4,0,88.52" transform="matrix(0.998, 0.07, -0.07, 0.998, 6.296, 0.227)"
        width="230.84" height="104.723" viewBox="0 0 230.84 104.723"
        ref={svgMobileContactTwo}
        animateF={props.animateF}
        time={props.svgStartTime+1000 || 1000}
      /> */}
      <div className="contactFormHeader">Contact Us</div>
      <div className="contactFormContainer">
        <div className="contactFormInternalContainer">
          <h2 className="contactFormHeading">Get in touch !</h2>

          <form
            method="post"
            action="https://europe-west1-properlivingproperty.cloudfunctions.net/contact"
            className="contactForm"
            id="contactForm"
            encType="multipart/form-data"
          >
            <div className="contactFormInputWrapper">
              <Input
                contactForm
                firstname
                key="firstname"
                label="First Name"
                type="text"
                handleChange={firstnameHandler}
                name="First Name"
                value={firstname}
                valid={true}
                touched={true}
              />

              <Input
                contactForm
                key="lastname"
                label="Last Name"
                type="text"
                handleChange={surnameHandler}
                name="Last Name"
                value={surname}
                valid={true}
                touched={true}
              />
            </div>

            <Input
              contactForm
              key="email"
              label="Email Address"
              type="text"
              handleChange={emailHandler}
              name="Email Address"
              value={email}
              valid={true}
              touched={true}
            />

            <Input
              textarea
              contactForm
              key="message"
              label="Your Message"
              type="text"
              handleChange={messageHandler}
              name="Your Message"
              value={message}
              valid={true}
              touched={true}
            />

            <button
              className="bttn btn-7 btn-7h"
              type="submit"
              onClick={(event) => {
                // if(){
                props.submitted(true);
                event.preventDefault();
                const body = {
                  email: email,
                  firstname: firstname,
                  surname: surname,
                  message: message,
                };

                const request = {
                  method: "post",
                  url:
                    "https://europe-west1-properlivingproperty.cloudfunctions.net/contact",
                  data: JSON.stringify(body),
                  headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                  },
                };
                console.log(request);

                axios(request)
                  .then((response) => {
                    //handle success
                    console.log(response);
                  })
                  .catch((response) => {
                    //handle error
                    console.log(response);
                  });
                // }
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="contactFormMapDiv">
          <Img
            className="contactFormMap"
            fluid={data.contactMap.childImageSharp.fluid}
          />
          <p className="contactMapFooterLocation">
            6 Nansen St, Observatory, Cape Town, 7925, South Africa
          </p>
        </div>
      </div>

      <Footer light />
    </div>
  );
};
export default Contact;
