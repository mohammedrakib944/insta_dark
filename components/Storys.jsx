import React from "react";
import Image from "next/image";

import img1 from "../public/assets/1.jpg";
import img2 from "../public/assets/2.jpg";
import img3 from "../public/assets/3.jpg";

const story = [
  {
    pic: img1,
    name: "Jhon Omuk",
  },
  {
    pic: img2,
    name: "Tomal Kazi",
  },
  {
    pic: img3,
    name: "Md Rakib",
  },
];

const Storys = () => {
  return (
    <div className="w-full p-4 md:my-4 bg-transparent md:bg-slate-800 rounded-lg md:border border-slate-700 flex items-center gap-4 overflow-x-auto scrollbar-hide">
      {story.map((data, index) => (
        <div className="w-[64px] text-center cursor-pointer" key={index}>
          {/* image */}
          <div className="flex mx-auto items-center p-[2px] w-[60px] h-[60px] image-border">
            <div className="w-full h-full p-[2px] bg-slate-700 rounded-full">
              <Image
                className="rounded-full"
                src={data.pic}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="rakib"
              />
            </div>
          </div>
          <p className="text-[12px] text-slate-300 pt-1">
            {data.name.slice(0, 7) + "..."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Storys;
