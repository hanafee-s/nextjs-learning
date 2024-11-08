const Header = () => {
  return (
    <div className="px-24 py-6 flex justify-between ">
      <div className="flex flex-row gap-4 items-center">
        <div className="text-2xl font-bold">LOGO</div>
        <div>รายวิชา</div>
        <div>ถ่ายทอดสด</div>
        <div>กระทู้คำถาม</div>
        <div>บทความ</div>
      </div>
      <div className="flex flex-row gap-4 rounded-lg">
        <div className="bg-gray-100 p-4 rounded-lg">ออกจากระบบ</div>
        <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-row gap-2">
          <div className="h-6 w-6 rounded-full bg-white"></div>
          <div>Siriwat Rachanon</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
