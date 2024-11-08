import React from "react";
import Demo from "./Demo";

const getMyCourse = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ok");
    }, 5000);
  });
};

const MyCourse = async () => {
  await getMyCourse();
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="w-full border shadow-md h-20 rounded-md text-center">
        1
      </div>
      <div className="w-full border shadow-md h-20 rounded-md text-center">
        1
      </div>
      <div className="w-full border shadow-md h-20 rounded-md text-center">
        1
      </div>
      <div className="w-full border shadow-md h-20 rounded-md text-center">
        1
      </div>
      <Demo />
    </div>
  );
};

export default MyCourse;
