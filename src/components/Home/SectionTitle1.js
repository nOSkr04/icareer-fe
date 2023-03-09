import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";

const SectionTitle1 = ({
  subtitle,
  title,
  description,
  textAlign,
  radiusRounded,
}) => {
  return (
    <div className={`section-title ${textAlign}`}>
      <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce={true}
      >
        <h2
          className="title w-600 mb--20"
          dangerouslySetInnerHTML={{ __html: "Бидний тухай" }}
        ></h2>
      </AnimationOnScroll>

      <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce={true}
      >
        <p
          className="description b1"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </AnimationOnScroll>
    </div>
  );
};
export default SectionTitle1;
