const Footer = () => {
  return (
    <div className="min-h-96 bg-[#00665E] px-24 py-12 text-white flex flex-col gap-4 divide-y">
      <div className="font-bold text-4xl">LOGO</div>
      <div className="grid grid-cols-4">
        <div className="font-extralight text-sm">
          <div className="font-bold !text-lg py-4">คอร์สของฉัน</div>
          <div>Data</div>
          <div>Science</div>
          <div>Tech</div>
          <div>Business</div>
        </div>
        <div className="font-extralight text-sm">
          <div className="font-bold !text-lg py-4">เกี่ยวกับเรา</div>
          <div>สอนกับเรา</div>
          <div>ติดต่อสอบถามเพิ่มเติม</div>
          <div>แจ้งปัญหาเกี่ยวกับระบบ</div>
          <div>ช่องทางการร้องเรียน</div>
        </div>
        <div className="font-extralight text-sm">
          <div className="font-bold !text-lg py-4">ความปลอดภัย</div>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
          <div>Data Protection Policy Six</div>
          <div>Cookie Policy</div>
        </div>
        <div>
          <div className="font-bold !text-lg py-4">
            Lorem Ipsum is simply dummy text of the printing .
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-sm py-4">
        <div>Y.I.M Corporation @ 2023. All rights reserved.</div>
        <div>0-3835-4580-4 , 0-3835-2611-6</div>
      </div>
    </div>
  );
};

export default Footer;
