import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Comment from "./components/Comment";
import OnlineCourse from "./components/OnlineCourse";

export default async function Home() {
  return (
    <div className="flex-1">
      <div className="px-20 py-10">
        <Banner />
        <OnlineCourse />
        <Blog />
        <Comment />
      </div>
    </div>
  );
}
