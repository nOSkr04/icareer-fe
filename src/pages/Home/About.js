import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <div className="rn-splite-style pt--100  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
            <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
                <h4 className="title">
                  Унших шалтгаан –
                  <strong style={{ color: "#059dff" }}>
                    {" "}
                    Зөвхөн хэрэгтэйг
                  </strong>{" "}
                </h4>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <p className="description">
                  <ul className="list-icon">
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Залуучуудын мэдлэг боловсрол, мэргэжил сонголт, ажил
                      хөдөлмөр эрхлэлт, цаашлаад амжилтад хүрэх бүх үе шатуудад
                      хамгийн хэрэгтэй үнэ цэнтэй мэдээллүүд нийтлэгддэг
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>{" "}
                      Анхдагч эх сурвалжаас шууд танд хүрэх маш чухал манлайлагч
                      нарын ярилцлага, зөвлөгөөнүүд
                    </li>

                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Шинэлэг өнгө төрх дизайн, хэвлэмэл хувилбараар уншихад
                      хамгийн тохиромжтой хэмжээ болон цаасны шийдэлтэй
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Уншигддаг COACH бас TRAINER
                    </li>
                  </ul>
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="/images/ihelp/bg3.jpg"
                alt="banner123"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
