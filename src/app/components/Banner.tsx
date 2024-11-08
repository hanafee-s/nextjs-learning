const Banner = () => {
  return (
    <div className="flex">
      <div className="basis-2/5">
        <div>Lorem Ipsum is simply dummy .</div>
        <div className="text-4xl">learn anytime, anywhere with Lorem</div>
      </div>
      <div className="basis-3/5">
        <div className="flex gap-4 h-72">
          <div className="basis-2/4 bg-gray-300 rounded-lg p-4 animate-pulse flex flex-col justify-between">
            <div>
              <div className="font-bold text-xl">
                Generative AI and ChatGPT: Design Thinking Edition
              </div>
              <div className="text-lg">ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white w-6 h-6 rounded-full"></div>
              <div className="text-sm">
                <div>ณัฐกานต์ สิทธิชัยอนันต์</div>
                <div>CEO Y.I.M Corporation</div>
              </div>
            </div>
          </div>
          <div className="basis-1/4 bg-gray-400 rounded-lg h-full p-4 animate-pulse flex flex-col justify-between">
            <div
              className="flex-1 font-bold text-md mb-8 rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Generative ChatGPT: UX Design Edition
            </div>
            <div className="bg-white w-8 h-8 rounded-full"></div>
          </div>
          <div className="basis-1/4 bg-gray-500 rounded-lg h-full p-4 animate-pulse flex flex-col justify-between">
            <div
              className="flex-1 font-bold text-lg mb-8 rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              UX Accelerator Bundle
            </div>
            <div className="bg-white w-8 h-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
