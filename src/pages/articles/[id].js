import React, { useEffect, useState } from "react";
import NewsDetailsContent from "../../components/news/NewsDetailsContent";
import Layout from "../../common/Layout";
import axios from "../../axios";
import { useRouter } from "next/router";

const NewsDetail = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/articles/${id}`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* <SEO title="Мэдээ" /> */}
      <Layout>
        <NewsDetailsContent data={data} />
      </Layout>
    </>
  );
};

export default NewsDetail;
