import React from "react";
import Accordian from "./FAQ/Accordian";
import ContactUs from "./ContactUs/ContactUs";
import FeaturedTests from "./FeaturedTests/FeaturedTests";
import FeaturedDevs from "./FeaturedDevs/FeaturedDevs";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import HeroBanner from "./HeroBanner/HeroBanner";

function Home() {
  return (
    <div>
      <HeroBanner />

      <ContentWrapper>
        <FeaturedTests />
        <FeaturedDevs />
        <Accordian />
        <ContactUs />
      </ContentWrapper>
    </div>
  );
}

export default Home;
