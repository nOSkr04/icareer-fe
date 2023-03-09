import React, { useEffect, useState } from "react";
import NewsDetailsContent from "../../components/news/NewsDetailsContent";
import Layout from "../../common/Layout";
import axios from "../../axios";
import { useRouter } from "next/router";
import SEO from "../../common/SEO";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://career-developer.com/api/v1/articles/${context.query.id}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const NewsDetail = ({ data }) => {
  return (
    <div>
      {/* <SEO description={} title="Мэдээ"  /> */}
      <Layout>
        <NewsDetailsContent data={data.data} />
      </Layout>
    </div>
  );
};

export default NewsDetail;
