import React, { Component } from "react";
import Slider from "react-slick";
import ServiceA from "./ServiceA";
import ServiceB from "./ServiceB";
import ServiceC from "./ServiceC";
import ServiceD from "./ServiceD";
import Helmet from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import "./slickb.css";

var ReactRotatingText = require("react-rotating-text");

const services = [<ServiceA />, <ServiceB />, <ServiceC />, <ServiceD />];

export default class ServiceMain extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      centerPadding: "60px",
      slidesToShow: 2,
      autoplay: true,
      slidesToScroll: 2,
    };

    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <Slider {...settings}>
          <ServiceA />

          <ServiceB />

          <ServiceC />

          <ServiceD />
        </Slider>

        <section id="service-slide-text">
          <blockquote>
            <h4>
              <ReactRotatingText
                style={{ marginLeft: "unset!important" }}
                items={[
                  "The purpose is to enhance the degree of confidence in the financial statements, to improve internal controls.",
                  "This is achieved by our expression of an opinion on whether the financial statements are prepared in accordance with the applicable reporting framework.",
                ]}
              />
            </h4>
          </blockquote>
        </section>
      </>
    );
  }
}
