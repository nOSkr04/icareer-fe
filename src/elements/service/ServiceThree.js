import React from "react";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ServiceList = [
  {
    image: "/images/service/icon-01.png",
    title: "Awarded Design",
    description:
      "There are many variations variats  of passages of Lorem Ipsum available, but the majority.",
  },
  {
    image: "/images/service/icon-02.png",
    title: "Design & Creative",
    description:
      "Passages there are many variatin Lorem Ipsum available, but the majority have suffered.",
  },
  {
    image: "/images/service/icon-03.png",
    title: "App Development",
    description:
      "Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.",
  },
];
const ServiceThree = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <img src={`${val.image}`} alt="card Images" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link
                      href="#service"
                      dangerouslySetInnerHTML={{ __html: val.title }}
                    ></Link>
                  </h4>
                  <p
                    className="description b1 color-gray mb--0"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  ></p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      ))}
    </div>
  );
};
export default ServiceThree;
