import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RealEstate from "./RealEstate";
import RiskManagement from "./RiskManagement";
import LocataireFarm from "./Farm";
import Default from "./Default";
import Career from "./Career";
import Contact from "./Contact";
import Layout from "../components/layout";
import Four from "./404";

const Home = (props) => {
  return (
    <Layout>
      <Navbar />
      <Switch>
        <Route exact path="/" component={RealEstate}></Route>
        <Route exact path="/farm/" component={LocataireFarm}></Route>
        <Route exact path="/risk/" component={RiskManagement}></Route>
        <Route exact path="/career/" component={Career}></Route>
        <Route exact path="/contact/" component={Contact}></Route>
        <Route exact component={Four}></Route>
      </Switch>
    </Layout>
  );
};
export default Home;
