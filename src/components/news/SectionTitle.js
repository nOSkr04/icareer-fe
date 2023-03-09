import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

const SectionTitle = ({ title, textAlign }) => {
  return (
    <div className={`section-title ${textAlign}`}>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce={true}
      >
        <h2
          className="title w-600 mb--20"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
      </AnimationOnScroll>
    </div>
  );
};
export default SectionTitle;
