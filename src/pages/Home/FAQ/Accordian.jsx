import React from "react";
import "./style.css";
import { faqs } from "./faqs";
import AccordianItem from "./AccordianItem";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
const Accordian = () => {
  return (
    <div className="bg-white p-5 m-5 relative dark:bg-[#212121] shadow-md rounded-xl lg:max-w-5xl mx-4 md:mx-auto md: max-w-2xl xs:mx-4 lg:px-0 ">
      <section className="faq">
        <ContentWrapper>
          <div className="heading">Frequently Ask Questions</div>
          <div className="accordian">
            {faqs.map((faq, index) => (
              <AccordianItem key={index} faq={faq} />
            ))}
          </div>
        </ContentWrapper>
      </section>
    </div>
  );
};

export default Accordian;
