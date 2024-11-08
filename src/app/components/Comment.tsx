const TextEditor = () => {
  return <div className="border border-gray-300 rounded-md min-h-36"></div>;
};

const Comment = () => {
  return (
    <div className="py-4">
      <div className="flex flex-row gap-2 py-4">
        <div>ICON</div>
        <div className="font-bold">ตั้งกระทู้คำถาม</div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-8 font-bold flex flex-col gap-4">
        <div>หัวข้อกระทู้</div>
        <div>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            placeholder="หัวข้อกระทู้"
          />
        </div>
        <div>เนื้อหา</div>
        <div>
          <TextEditor />
        </div>
      </div>
    </div>
  );
};
export default Comment;
