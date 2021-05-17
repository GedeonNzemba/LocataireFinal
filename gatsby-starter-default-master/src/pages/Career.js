import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

function Career() {
  return (
    <Layout>
      <h1>HELLO WORLD</h1>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/career/">Go to CAREER</Link> <br />
      <Link to="/contact/">Go to Contact</Link> <br />
      <Link to="/farm/">Go to Farm</Link> <br />
      <Link to="/realestate/">Go to RealEtate</Link> <br />
      <Link to="/riskmanagement/">Go to risk management</Link> <br />
    </Layout>
  );
}

export default Career;
