import React from "react";

function ContentWrapper({ children, customClass }) {
  //   console.log(customClass);
  return (
    <div
      className={
        `contentWrapper w-full max-w-[1280px] mx-auto my-0 px-[20px] py-0 ` +
        customClass
      }
    >
      {children}
    </div>
  );
}

export default ContentWrapper;
// .contentWrapper {
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
// }
