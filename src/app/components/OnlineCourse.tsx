const Card = () => {
  return (
    <div className="bg-red-400 animate-pulse px-4 py-4 rounded-lg flex flex-col gap-4">
      <div>
        <div className="text-xs">Business</div>
      </div>
      <div className="font-bold text-sm">
        ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัย พื้นฐาน
      </div>
      <div className="text-sm">รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น</div>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 rounded-full bg-white"></div>
        <div className="text-xs">
          <div>ณัฐกานต์ สิทธิชัยอนันต์</div>
          <div>CEO Y.I.M Corporation</div>
        </div>
      </div>
    </div>
  );
};

const OnlineCourse = () => {
  return (
    <div className="py-4">
      <div className="flex flex-row gap-2 py-4">
        <div>ICON</div>
        <div className="font-bold">คอร์สออนไลน์</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default OnlineCourse;
