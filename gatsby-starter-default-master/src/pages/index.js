import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import RealEstate from "./RealEstate";
import Navbar from "../components/Navbar";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RealEstate />
  </Layout>
);

export default IndexPage;
