import React from "react";
import Accordian from "./FAQ/Accordian";
import ContactUs from "./ContactUs/ContactUs";
import FeaturedTests from "./FeaturedTests/FeaturedTests";
import FeaturedDevs from "./FeaturedDevs/FeaturedDevs";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

function Home() {
  return (
    <div>
      <ContentWrapper>
        HOMEPAGE
        <FeaturedTests />
        <FeaturedDevs />
        <Accordian />
        <ContactUs />
      </ContentWrapper>
    </div>
  );
}

export default Home;
