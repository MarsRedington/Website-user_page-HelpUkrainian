// @ts-ignore
import React from "react";
import Header from "../../components/header/header";
import Advertisement from "../../components/advertisement/advertisement";
import Workshops from "../../components/workShops/workshops";
import ScrollToTop from "../../services/scrollToTop";
import "./learnMore.css";
import Footer from "../../components/footer/footer";

function LearnMorePage() {
  return (
    <section className="mainContainer">
      <ScrollToTop />
      <div className="headerContainer">
        <Header />
        <Advertisement />
        <Workshops />
        <Footer />
      </div>
    </section>
  );
}

export default LearnMorePage;
