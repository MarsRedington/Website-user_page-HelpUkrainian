import React from "react";
import MainFAQ from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import Offerr from "../../components/offer/offer";
import OurStory from "../../components/ourStory/ourStory";
import Team from "../../components/team/team";
import Testimonials from "../../components/testimonials/testimonials";
import WhatWeDo from "../../components/whatwedo/whatwedo";
import "./mainpage.css";

function MainPage() {
  return (
    <main>
      <div className="mainPageContainer">
        <Offerr />
        <WhatWeDo />
        <OurStory />
        <Testimonials />
        <Team />
        <Form />
        <MainFAQ />
        <Footer />
      </div>
    </main>
  );
}

export default MainPage;
