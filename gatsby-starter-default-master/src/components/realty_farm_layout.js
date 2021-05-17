import React from "react"
import "../styles/Locataire.css"

import ButtonFour from "./buttonFour"
import ButtonThree from "./ButtonThree"
import ButtonFive from "./buttonFive"

export default function RealtyFarmLayout() {
  return (
    <React.Fragment>
      <div className="realty__farm">
        <header className="realty__farm-header">
          <nav className="realty__farm-navbar">
            <ul className="realty__farm-navWrap">
              <li className="nav-item" id="nav-logo">
                <img
                  src={require("../images/logo.png")}
                  alt="Locataire logo"
                ></img>
              </li>
            </ul>
            <div id="divider-header-farm" />
            <ul className="realty__farm-navWrap">
              <li className="nav-item">
                <span>home</span>
              </li>
              <li className="nav-item">
                <span>real estate</span>
              </li>
              <li className="nav-item">
                <span>livestock</span>
              </li>
              <li className="nav-item">
                <span>risk management</span>
              </li>
              <li className="nav-item">
                <span>career</span>
              </li>
            </ul>
          </nav>

          <div className="realty__farm-content">
            <section className="realty__farm-content-text">
              <div className="realty__farm-content-wrap">
                <div className="realty__farm-content-title">
                  <h1>livestock production</h1>
                </div>
                <div className="realty__farm-content-paragraph">
                  <p>
                    Locataire Farm is an agribusiness and food ingredient entity
                    dedicated
                    <br />
                    to improving the global food supply chain.
                  </p>
                  <p>
                    The farm is located in Pointe-Noire, a port city <br />
                    industry hub in the Republic of the Congo
                  </p>
                </div>
                <div className="realty__farm-content-buttons">
                  <div className="realty__farm-button-left">
                    <ButtonFour />
                  </div>
                  <div className="realty__farm-button-right">
                    <ButtonFive name="Contact Us"/>
                  </div>
                </div>
              </div>
            </section>

            <section className="realty__farm-content-image">
              {/* <Helmet>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />

                        </Helmet> */}
              <div className="realty__farm-content-circleOne"></div>
              <div className="realty__farm-content-image_slide"></div>
            </section>
          </div>
        </header>

        <br />
        <br />
        <br />

        <div className="realty__farm-aboutUs">
          <section className="realty__farm-aboutUs-top_content">
            <div className="realty__farm-aboutUs-top_content_Leftwrap">
              <span>know about us</span>
              <h2>livestock production</h2>
            </div>

            <div className="realty__farm-aboutUs-top_content_Rightwrap">
              <div className="realty__farm-aboutUs-top_content_divider"></div>
              <div className="realty__farm-aboutUs-top_content_text">
                From our farm to the table, our team supplies raw and
                <br />
                processed agricultural commodities and specialized <br />
                food ingredients to a wide range of customers in the <br />
                livestock, poultry, food processor, food services and <br />
                bakery industries.
              </div>
            </div>
          </section>

          <section className="realty__farm-aboutUs-bottom_content">
            <div className="realty__farm-aboutUs-bottom_content_leftImage">
              <div className="realty__farm-aboutUs-bottom_content_leftImage_image"></div>
            </div>
            <div className="realty__farm-aboutUs-bottom_content_rightContainer">
              <div className="realty__farm-aboutUs-bottom_content_rightslider">
                <div className="realty__farm-slideOne realty__farm-slide">
                  <div className="realty__farm-slideOne_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideOne_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-certificate"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Poultry Production</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        We raised various poultry species including <br />
                        crossbred chickens, turkeys, ducks, <br />
                        guinea fowl, and geese
                      </p>
                    </div>
                  </div>
                </div>

                <div id="realty__farm-slide_divider" />

                <div className="realty__farm-slideOne realty__farm-slide">
                  <div className="realty__farm-slideOne_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideOne_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-certificate"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Poultry Production</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        We raised various poultry species including <br />
                        crossbred chickens, turkeys, ducks, <br />
                        guinea fowl, and geese
                      </p>
                    </div>
                  </div>
                </div>

                <div id="realty__farm-slide_divider" />

                <div className="realty__farm-slideTwo realty__farm-slide">
                  <div className="realty__farm-slideTwo_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideTwo_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-heartbeat"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Healthy Journey</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        Our animals are raised outdoors on pasture <br />
                        where they enjoy a comfort that allows
                        <br />
                        them to express their natural behaviors.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="realty__farm-slide_divider" />

                <div className="realty__farm-slideTwo realty__farm-slide">
                  <div className="realty__farm-slideTwo_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideTwo_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-heartbeat"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Healthy Journey</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        Our animals are raised outdoors on pasture <br />
                        where they enjoy a comfort that allows
                        <br />
                        them to express their natural behaviors.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="realty__farm-slide_divider" />

                <div className="realty__farm-slideOne realty__farm-slide">
                  <div className="realty__farm-slideOne_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideOne_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-certificate"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Poultry Production</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        We raised various poultry species including <br />
                        crossbred chickens, turkeys, ducks, <br />
                        guinea fowl, and geese
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="realty__farm-aboutUs-bottom_content_rightBottom_info">
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_title">
                  We offer alternative farming system with regard to biosecurity
                </div>
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_subject">
                <p>based on free range production of poultry, table eggs, pig,
                  and goat. We produce organic products of superior <br /> quality in
                  accordance with food safety management standards such as the
                  International Standard ISO 22000.
                  </p>
                </div>
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_options">
                  <ul className="realty__farm-aboutUs-bottom_content_rightBottom_info_optionWrap">
                    <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-dna"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            birds are bred for meat or egg production and
                            require intensive nutritional and health management
                            to express their genetic potential.
                          </p>
                        </div>
                      </div>
                    </li>
                   <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-drumstick-bite"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            Turkeys are generally raised for meat, not for any
                            eggs they might provide.
                          </p>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-feather-alt"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            Ducks however are raised for meat, feathers and for
                            their eggs.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <br />
        <br />
        <br />

        <div className="realty__farm-aboutUs">
          <section className="realty__farm-aboutUs-top_content">
            <div className="realty__farm-aboutUs-top_content_Leftwrap">
              <span>know about us</span>
              <h2>livestock production</h2>
            </div>

            <div className="realty__farm-aboutUs-top_content_Rightwrap">
              <div className="realty__farm-aboutUs-top_content_divider"></div>
              <div className="realty__farm-aboutUs-top_content_text">
                From our farm to the table, our team supplies raw and
                <br />
                processed agricultural commodities and specialized <br />
                food ingredients to a wide range of customers in the <br />
                livestock, poultry, food processor, food services and <br />
                bakery industries.
              </div>
            </div>
          </section>

          <section className="realty__farm-aboutUs-bottom_content">
            <div className="realty__farm-aboutUs-bottom_content_leftImage">
              <div className="realty__farm-aboutUs-bottom_content_leftImage_image-2"></div>
            </div>
            <div className="realty__farm-aboutUs-bottom_content_rightContainer">
              <div className="realty__farm-aboutUs-bottom_content_rightslider">
                <div className="realty__farm-slideOne realty__farm-slide">
                  <div className="realty__farm-slideThree_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideOne_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-certificate"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Veterinarian Support</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        We provide them excellent feed and <br />
                        housing and monitor their health <br />
                        constantly 
                      </p>
                    </div>
                  </div>
                </div>

                <div id="realty__farm-slide_divider" />

                <div className="realty__farm-slideTwo realty__farm-slide">
                  <div className="realty__farm-slideFour_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideTwo_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-heartbeat"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Animal Care</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                          Our well-trained staff work with the animals <br />
                          taking care of them on a daily basis. From <br />
                          attention to hygiene, feeding and preventive<br />
                          measures to reduce to a minimum injury or <br />
                          any type of stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="realty__farm-aboutUs-bottom_content_rightBottom_info">
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_title">
                  We offer alternative farming system with regard to biosecurity
                </div>
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_subject">
                  <p>based on free range production of poultry, table eggs, pig,
                  and goat. We produce organic products of superior <br /> quality in
                  accordance with food safety management standards such as the
                  International Standard ISO 22000.
                  </p>
                </div>
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_options">
                  <ul className="realty__farm-aboutUs-bottom_content_rightBottom_info_optionWrap">
                    <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-dna"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            birds are bred for meat or egg production and
                            require intensive nutritional and health management
                            to express their genetic potential.
                          </p>
                        </div>
                      </div>
                    </li>
                   <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-drumstick-bite"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            Turkeys are generally raised for meat, not for any
                            eggs they might provide.
                          </p>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-feather-alt"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            Ducks however are raised for meat, feathers and for
                            their eggs.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <br />
        <br />
        <br />

        <div className="realty__farm-aboutUs">
          <section className="realty__farm-aboutUs-top_content">
            <div className="realty__farm-aboutUs-top_content_Leftwrap">
              <span>know about us</span>
              <h2>livestock production</h2>
            </div>

            <div className="realty__farm-aboutUs-top_content_Rightwrap">
              <div className="realty__farm-aboutUs-top_content_divider"></div>
              <div className="realty__farm-aboutUs-top_content_text">
                From our farm to the table, our team supplies raw and
                <br />
                processed agricultural commodities and specialized <br />
                food ingredients to a wide range of customers in the <br />
                livestock, poultry, food processor, food services and <br />
                bakery industries.
              </div>
            </div>
          </section>

          <section className="realty__farm-aboutUs-bottom_content">
            <div className="realty__farm-aboutUs-bottom_content_leftImage">
              <div className="realty__farm-aboutUs-bottom_content_leftImage_image-3"></div>
            </div>
            <div className="realty__farm-aboutUs-bottom_content_rightContainer">
              <div className="realty__farm-aboutUs-bottom_content_rightslider">
                <div className="realty__farm-slideOne realty__farm-slide">
                  <div className="realty__farm-slideFive_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideOne_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-certificate"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Meat Production</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        Raised without antibiotics or growth <br />
                        enhancers, animals’ nutrition includes <br />
                        cereals and flaxseed, giving the meat an <br />
                        incomparable flavor and mellowness
                      </p>
                    </div>
                  </div>
                </div>

                <div id="realty__farm-slide_divider" />

                <div className="realty__farm-slideTwo realty__farm-slide">
                  <div className="realty__farm-slideSix_image realty__farm-slide_image"></div>
                  <div className="realty__farm-slideTwo_content">
                    <div className="realty__farm-slider_title">
                      <div className="realty__farm-slider_dot">
                        <i class="fas fa-heartbeat"></i>
                      </div>
                      <div className="realty__farm-slider_text">
                        <span>Veterinarian Support</span>
                      </div>
                    </div>
                    <div className="realty__farm-slider_paragraph">
                      <p>
                        We also have the support of a veterinarian <br />
                        who performs weekly check of our animals <br />
                        and provides advise for their care
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="realty__farm-aboutUs-bottom_content_rightBottom_info">
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_title">
                  We offer alternative farming system with regard to biosecurity
                </div>
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_subject">
                  <p>based on free range production of poultry, table eggs, pig,
                  and goat. We produce organic products of superior <br /> quality in
                  accordance with food safety management standards such as the
                  International Standard ISO 22000.
                  </p>
                </div>
                <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_options">
                  <ul className="realty__farm-aboutUs-bottom_content_rightBottom_info_optionWrap">
                    <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-dna"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            birds are bred for meat or egg production and
                            require intensive nutritional and health management
                            to express their genetic potential.
                          </p>
                        </div>
                      </div>
                    </li>
                   <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-drumstick-bite"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            Turkeys are generally raised for meat, not for any
                            eggs they might provide.
                          </p>
                        </div>
                      </div>
                    </li>
                     <li>
                      <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option">
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_leftSvg">
                          <i class="fas fa-feather-alt"></i>
                        </div>
                        <div className="realty__farm-aboutUs-bottom_content_rightBottom_info_option_paragraph">
                          <p>
                            Ducks however are raised for meat, feathers and for
                            their eggs.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <br />
        <br />
        <br />

        <div className="realty__farm-Product">
          <div id="circle-svg-right_one" />
          <div id="circle-svg-right_two" />
          <header className="realty__farm-Product_header">
            <div className="realty__farm-Product_header-title">
              <h2>our products</h2>
            </div>
            <div className="realty__farm-Product_header-searchFilter">
              <div className="realty__farm-Product_header-searchFilter_option"><span>all</span></div>
              <div className="realty__farm-Product_header-searchFilter_option"><span>animals</span></div>
              <div className="realty__farm-Product_header-searchFilter_option"><span>eggs</span></div>
              <div className="realty__farm-Product_header-searchFilter_option"><span>meat</span></div>
              <div className="realty__farm-Product_header-searchFilter_option"><span>livestock</span></div>
              <div className="realty__farm-Product_header-searchFilter_option"><span>nutrition</span></div>
            </div>
          </header>

          <div className="realty__farm-Product_productContainerWrap">
            <div className="realty__farm-Product_productContainer">
            <div className="realty__farm-Product_product-box realty__farm-Product_box-1">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Animal Nutrition</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>
                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-2">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-two" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Hatching Eggs</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>
                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-3">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-three" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Poultry Meat</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>
            <div className="realty__farm-Product_product-box realty__farm-Product_box-4">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-four" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Old Day Chick</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-5">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-five" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Livestock</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-6">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-six" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Fresh Eggs</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            
          </div>
          <br />
          <br />
         

          {/* <div className="realty__farm-product-contactWrap">
            <div className="realty__farm-product-contact_image" />
            <div className="realty__farm-product-contact_content">
              <h1>
                Contact Us
              </h1>
              <p>
                For questions, more information or to place an order, <br />
                call or email us at info@locataire.net. We will review <br />
                your needs and discuss availability and delivery <br />
                options.
              </p>
            </div>
          </div> */}

          

          <div className="realty__farm-product__svgCircle-a" />
          </div>
          <div className="realty__farm-product-contactWrap">
            <div className="realty__farm-product-contact_image" />
            <div className="realty__farm-product-contact_content">
              <h1>
                Contact Us
              </h1>
              <p>
                For questions, more information or to place an order, <br />
                call or email us at info@locataire.net. We will review <br />
                your needs and discuss availability and delivery <br />
                options.
              </p>
            </div>
          </div>

          <div className="realty__farm-product-animal">
            <div className="realty__farm-product-content_left">
              <span>
                BOARD SEMEN ( PUREBRED )
              </span>
            </div>
            <div className="realty__farm-aboutUs-top_content_Rightwrap">
              <div className="realty__farm-aboutUs-top_content_divider"></div>
              <div className="realty__farm-aboutUs-top_content_text">
                we sell fresh (pure blood) pig seeds or refrigerated high qualities for <br />
                artificial reproduction of pure bred and crossbred. The boars Duroc, <br />
                Landrace, Berkshire, offered are intended to produce hybrid soars. <br />
                These are elite genetic strains from recognized and accredited <br />
                insemination centers in the United States. 
              </div>
            </div>

            
          </div>

          
          <br />
          <br />
          <br />
          <div className="realty__farm-product-BOARD-SEMEN">
            <div className="realty__farm-product__svgCircle-c" />
            <div className="realty__farm-product__svgCircle-d" />
            <div className="realty__farm-product-BOARD-SEMEN_duroc-bra">
              <div className="realty__farm-product__svgCircle-b" />
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      duroc-bra
                    </h1>
                    <p>
                      DUROC-BRA is a very trim made boar being lean about the jowl and <br />
                      trim middle. He has lean muscular top and shapely, thick ham. He <br />
                      stands on good bone with even toes and correctly structured both <br />
                      front and rear
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img" />
              </div>
            </div>

            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez">
              <div className="realty__farm-product__svgCircle-c" />
              <section id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-REDZ
                    </h1>
                    <p>
                      DUROC-REDZ is a big, high performing and well balance and sound <br />
                      Duroc boar. He can inject superior performance and cutability into <br />
                      your herd while maintaining a sound well-balance phenotype. He is <br />
                      wide based, bold shouldered with very good spring of rib.
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img" />
              </div>
              </section>
            </div>





            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss">
              <div className="realty__farm-product__svgCircle-d" />
              <section id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-RISS
                    </h1>
                    <p>
                      DUROC-RISS features a big forearm and blade with big, even toes <br />
                      that set down very correct and square as he floats across the <br />
                      ground on the move. A big top and rump features ideal muscle <br />
                      shape and volume for a terminal production-oriented sire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-riss__img" />
              </div>
              </section>
            </div>



            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez">
              <div className="realty__farm-product__svgCircle-c" />
              <section id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-REG
                    </h1>
                    <p>
                      DUROC-REG is a wide made boar that displays a bold shoulder, wide <br />
                      chest floor and big well sprung rib cage. He has excellent shape down <br />
                      his top with a big square rump and a thick muscular ham. Well balanced <br />
                      from end to end, Reggie is very correct in his feet and leg structure. He <br />
                      stands on good bone with big even toes
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-reg__img" />
              </div>
              </section>
            </div>



            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss" id="duroc-mrr">
              <div className="realty__farm-product__svgCircle-d" />
              <section id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-MRR
                    </h1>
                    <p>
                      DUROC-MRR is one of our best boars purchased. his proportions <br />
                      are incredible, his natural width of skeleton is superb, and he's got <br />
                      a long, square and athletic rear joint for a red hog.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-mrr__img" />
              </div>
              </section>
            </div>



          <div className="landrace_title">
            <span>
              Landrace
            </span>
          </div>

          <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez" id="landrace">
              <div className="realty__farm-product__svgCircle-c" id="landrace_svgCircle"/>
              <section className="landrace" id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                     LANDRACE-BUX
                    </h1>
                    <p>
                      LANDRACE-BUX has an extra punch for heaviness of structure and <br />
                      superior durability. He comes in a moderate framed, long bodied <br />
                      package. Landrace-BUX is very youthful. He exhibits clean bone, <br />
                      superior underline texture and a sharp sheath. His daughters can be <br />
                      expected produce more pigs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="landrace_image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar"  />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-bux__img" />
              </div>
              </section>
            </div>
              
            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss" id="landrace">
              <div className="realty__farm-product__svgCircle-d" id="landrace_svgCircle" />
              <section className="landrace" id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      LANDRACE-FIN
                    </h1>
                    <p>
                      LANDRACE-FIN is one of the most productive and dominate line in <br />
                      the Landrace breed. The pig has that extra heaviness of structure, <br />
                      long faced, long necked, built to withstand the rigorous of <br />
                      confinement.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="landrace_image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-fin__img" />
              </div>
              
              </section>
            </div>

            
            <div className="landrace_title">
            <span>
            BERKSHIRE 
            </span>
          </div>

          <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez" id="berkshire_clip">
              <div className="realty__farm-product__svgCircle-c" />
              <section id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      BERKSHIRE-SEP
                    </h1>
                    <p>
                      BERKSHIRE-SEP - Three traits standout: Meat Quality- marbling as <br />
                      intramuscular fat has always been superb. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="berkshire">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar"  />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-sep__img" />
              </div>
              </section>
            </div>

            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss" id="berkshire_bottom-clip">
              <div className="realty__farm-product__svgCircle-d"  />
              <section id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      BERKSHIRE-EXC
                    </h1>
                    <p>
                      BERKSHIRE-EXC is known for superior meat quality, and durable in <br />
                      his build, stout in his muscle and excellent on his feet and legs.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="berkshire">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-exc__img" />
              </div>
              
              </section>
            </div>

            <div className="realty__farm-product-contactWrap" id="product_contact-bottom">
            <div className="realty__farm-product-contact_image" />
            <div className="realty__farm-product-contact_content">
              <h1>
                Contact Us
              </h1>
              <p>
                For questions, more information or to place an order, <br />
                call or email us at info@locataire.net. We will review <br />
                your needs and discuss availability and delivery <br />
                options.
              </p>
            </div>
          </div>

           
          </div>
         
        </div>
      </div>
    </React.Fragment>
  )
}
