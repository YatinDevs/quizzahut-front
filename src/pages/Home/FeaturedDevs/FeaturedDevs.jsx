import React from "react";
import Carousel from "../../../components/Carousel/Carousel";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function FeaturedDevs() {
  return (
    <div>
      <ContentWrapper>
        <h2 className="text-center text-2xl m-7">Featured Developers</h2>
      </ContentWrapper>
      <Carousel />
    </div>
  );
}

export default FeaturedDevs;
