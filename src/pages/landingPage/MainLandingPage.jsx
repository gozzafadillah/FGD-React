import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import AboutPage from "./AboutPage";
import Download from "./Download";
import FeaturePage from "./FeaturePage";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Team from "./Team";
import Footer from "./Footer";

const MainLandingPage = () => {
  return (
    <Layout style={{ overflowX: "hidden" }}>
      <Navbar />
      <Content>
        <HomePage />
        <FeaturePage />
        <AboutPage />
        <Download />
        <Team />
        <Footer />
      </Content>
    </Layout>
  );
};

export default MainLandingPage;
