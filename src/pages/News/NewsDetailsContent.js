/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import MetaShare from "../../common/MetaShare";
const NewsDetailsContent = (props) => {
  const { data } = props;
  return (
    <>
    {data && 
      <MetaShare
      title="Мэдээ мэдээлэл"
      ogTitle={data.title}
      ogDescrtiption={data.title}
      image={data.image}
      id={data._id}
      />
    }
      <div className="post-page-banner rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content text-center">
                <div className="page-title">
                  <h1 className="theme-gradient">{data.title}</h1>
                </div>
              
                <div className="thumbnail alignwide mt--60">
                  <img
                    className="w-100 radius"
                    src={`https://career-developer.com/upload/${data.image}`}
                    alt="Blog Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content pt--60 rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content">
                {data.body &&
                  data.body.map((value, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    );
                  })}
                {data.body1 &&
                  data.body1.map((value, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    );
                  })}
                {data.body2 &&
                  data.body2.map((value, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    );
                  })}
      <iframe
                  src={`https://www.facebook.com/plugins/like.php?href=https://icareer.mn/news/${data._id}&width=174&layout=button_count&action=like&size=large&share=true&height=46&appId=662546334827488`}
                  width={174}
                  height={46}
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailsContent;
