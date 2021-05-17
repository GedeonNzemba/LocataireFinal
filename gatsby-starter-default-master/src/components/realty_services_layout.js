import React from "react"
import "../styles/Locataire.css"
import Helmet from "react-helmet"

export default function RealtyAboutLayout() {

    return(
        // RIGHT 

        <div className="realty_services">
            <span className="realty_services-svg"></span>
            <div className="realty__services-svgDivider"></div>
            <section className="realty_services-header">

                {/* content */}
                <div className="realty_services-content">
                    <h1>investment service</h1>
                    <div className="realty_services_content-text">
                        <Helmet>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
                        </Helmet>
                        <span className="realty_services_content-text-icon"><i class="fas fa-info-circle"></i></span>
                        <div className="realty_services_content-paragraph">
                            Locataire offers to prospective partners opportunities<br /> 
                            to invest in dozens of high-growth residential and <br />
                            commercial properties in the United States, and Canada.<br /> <br />
                            We leverage experience and local market knowledge to <br />
                            produce top quality risk-adjusted returns for investors.
                        </div>
                    </div>

                    <br />
                    <div className="realty_services_content-banner"></div>
                    
                    <div className="realty_services-subContent">
                        <div className="realty_services-subsvg"></div>
                        <div className="realty_services-subtitle">
                            <div className="realty_services-verticalLine"></div>
                            <div className="services-subtitle">
                                <h3>
                                    Real Estate investment services <br />
                                    include the following
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* image */}
                <div className="realty_services-image">
                    
                    
                    <span className="realty_services-midsvg"></span>
                </div>
            </section>



           

            <br />

            <div className="realty_services-option">
                <div className="realty_services-option-boxItem">
                    <ul>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-search-location"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Identify undervalue real estate properties 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageTwo"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-home"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Property acquisition 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageThree"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-house-damage"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Renovation and remodeling 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageFour"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-chart-line"></i></div>
                                        <div className="realty__services-option-itemTitle" id="services-option-itemTitle-long">
                                            Implement strategic capital and operational programs to increase cashflow
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageFive"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-tasks"></i></div>
                                        <div className="realty__services-option-itemTitle" id="services-option-itemTitle-long">
                                            Implement effective asset management controls
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageSix"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-balance-scale"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Reduce overall risk
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="realty_services-option-decoration"></div>
                </div>
            </div>

            // LEFT 
        <div className="realty_services">
            <span className="realty_services-svg realty__services-svgLeft"></span>
            <div className="realty__services-svgDivider realty__services-svgDividerLeft"></div>
            <section className="realty_services-header realty_services-headerLeft">

                {/* content */}
                <div className="realty_services-content realty_services-contentLeft">
                    <h1>investment service</h1>
                    <div className="realty_services_content-text">
                        <Helmet>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
                        </Helmet>
                        <span className="realty_services_content-text-icon"><i class="fas fa-info-circle"></i></span>
                        <div className="realty_services_content-paragraph">
                            Locataire offers to prospective partners opportunities<br /> 
                            to invest in dozens of high-growth residential and <br />
                            commercial properties in the United States, and Canada.<br /> <br />
                            We leverage experience and local market knowledge to <br />
                            produce top quality risk-adjusted returns for investors.
                        </div>
                    </div>

                    <br />
                    <div className="realty_services_content-banner"></div>
                    
                    <div className="realty_services-subContent">
                        <div className="realty_services-subsvg"></div>
                        <div className="realty_services-subtitle">
                            <div className="realty_services-verticalLine"></div>
                            <div className="services-subtitle">
                                <h3>
                                    Real Estate investment services <br />
                                    include the following
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* image */}
                <div className="realty_services-image realty_services-imageLeft">
                    
                    
                    <span className="realty_services-midsvg"></span>
                </div>
            </section>



           

            <br />

            <div className="realty_services-option">
                <div className="realty_services-option-boxItem">
                    <ul>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-search-location"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Identify undervalue real estate properties 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageTwo"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-home"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Property acquisition 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageThree"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-house-damage"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Renovation and remodeling 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageFour"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-chart-line"></i></div>
                                        <div className="realty__services-option-itemTitle" id="services-option-itemTitle-long">
                                            Implement strategic capital and operational programs to increase cashflow
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageFive"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-tasks"></i></div>
                                        <div className="realty__services-option-itemTitle" id="services-option-itemTitle-long">
                                            Implement effective asset management controls
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="realty_services-option--boxContainer">
                                <div className="realty__services-option--innerBox">
                                    <div className="realty_services-option--imageContainer realty__services-option--imageSix"></div>
                                    <div className="realty_services-option--content">
                                        <div className="realty__services-option-icon"><i class="fas fa-balance-scale"></i></div>
                                        <div className="realty__services-option-itemTitle">
                                            Reduce overall risk
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="realty_services-option-decoration"></div>
                </div>
            </div>
        </div>
        </div>
    )
}