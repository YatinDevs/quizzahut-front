import React from "react";
import Accordian from "./FAQ/Accordian";
import ContactUs from "./ContactUs/ContactUs";
import FeaturedTests from "./FeaturedTests/FeaturedTests";
import FeaturedDevs from "./FeaturedDevs/FeaturedDevs";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import HeroBanner from "./HeroBanner/HeroBanner";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div>
      {/* <HeroBanner /> */}
      <Hero/>
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
