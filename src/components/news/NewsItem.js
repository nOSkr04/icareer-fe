import moment from "moment";
import React from "react";
import Link from "next/link";
const NewsItem = ({ data }) => {
  return (
    <div className="rwt-card">
      <div className="inner">
        <div className="thumbnail">
          <figure className="card-image">
            <Link href={`/articles/${data.id}`}>
              <img
                className="img-fluid"
                src={`https://career-developer.com/upload/${data.image}`}
                alt="Portfolio-01"
              />
            </Link>
          </figure>
          <Link href={`/articles/${data.id}`} className="rwt-overlay"></Link>
        </div>
        <div className="content">
          <h5 className="title mb--10">
            <Link href={`/articles/${data.id}`}>{data.title}</Link>
          </h5>
          <p className="description">
            <Link href={`/articles/${data.id}`}>
              {moment(data.createdAt).format("L")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
