const Card = () => {
  return (
    <div className="bg-white shadow rounded-lg flex flex-row h-full">
      <div className="border rounded-l-lg bg-gray-400 animate-pulse basis-2/5" />
      <div className="p-4 basis-3/5">
        <div className="font-bold">Lorem Ipsum</div>
        <div>
          "There is no one who loves pain itself, who seeks after it and wants
          to have it, simply because it is pain..."
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="py-4">
      <div className="flex flex-row py-4 justify-between items-center">
        <div className="flex gap-2">
          <div>ICON</div>
          <div className="font-bold">บทความและข่าวสารล่าสุด</div>
        </div>
        <div className="border border-[#A8AD00] text-[#A8AD00] py-2 px-6 rounded-full">
          ดูทั้งหมด
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 flex-1 justify-around">
          <Card />
          <Card />
        </div>
        <div className="flex flex-col gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Blog;
