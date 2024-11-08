import { Suspense } from "react";
import Content from "./component/BlogContent";
import { Metadata } from "next";
import axios from "axios";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await GetData(params.slug);
  return {
    title: data.title,
    description: data.description,
  };
}

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <div>page : {params.slug}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
};

export default Page;
