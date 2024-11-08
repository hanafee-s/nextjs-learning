import axios from "axios";
import React from "react";

const GetData = async (slug: string) => {
  const res = await axios.get<{
    data: {
      title: string;
      description: string;
      createdAt: string;
      publishedAt: string;
    };
  }>(`http://localhost:1337/api/articles/${slug}`);
  return res.data.data;
};

const Content = async () => {
  const blog = await GetData("awmtyfa63p07sl48dtzk2og2");
  return (
    <React.Fragment>
      <div>{blog?.title}</div>
      <div>{blog?.description}</div>
      <div>{blog?.publishedAt}</div>
    </React.Fragment>
  );
};

export default Content;
