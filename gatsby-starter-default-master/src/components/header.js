import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "./Navbar";

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <Navbar />
  </React.Fragment>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
