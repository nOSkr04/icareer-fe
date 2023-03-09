import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "../../axios";
import NewsItem from "../news/NewsItem";
const PortfolioOne = ({ Column }) => {
  const [getAllItems, setGetAllItems] = useState([]);
  useEffect(() => {
    axios
      .get(`/articles?limit=3&sort=-createdAt`)
      .then((result) => {
        setGetAllItems(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row row--15">
        {getAllItems.map((item) => (
          <div key={item.id} className={Column}>
            <NewsItem data={item} />
          </div>
        ))}
      </div>

      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rwt-load-more text-center mt--50">
            <Link
              className="btn btn-default btn-large btn-icon"
              href="/newspage"
            >
              <span>Дэлгэрэнгүй</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOne;
