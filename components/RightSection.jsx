import Image from "next/image";

import img1 from "../public/assets/1.jpg";
import img2 from "../public/assets/2.jpg";
import img3 from "../public/assets/3.jpg";
import img4 from "../public/assets/4.jpg";
import img5 from "../public/assets/5.jpg";

const suggsationsData = [
  {
    id: 2,
    pic: img2,
    username: "username_31",
  },
  {
    id: 3,
    pic: img3,
    username: "nothing",
  },
  {
    id: 4,
    pic: img4,
    username: "another_user",
  },
  {
    id: 5,
    pic: img5,
    username: "i_am_suggsation",
  },
];

const RightSection = () => {
  return (
    <div className="w-[319px] my-4 fixed px-2">
      {/* header */}
      <div className="flex items-center justify-between">
        {/* left header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center p-[2px] w-[60px] h-[60px]">
            <div className="w-full h-full p-[2px] bg-slate-700 rounded-full">
              <Image
                className="rounded-full"
                src={img1}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="rakib"
              />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-slate-100 font-semibold">
              mr_jon_user
            </p>
            <p className="text-[14px] text-slate-400">Mr. Jhon Pramanik</p>
          </div>
        </div>

        {/* right header */}
        <div>
          <p className="text-sky-400 text-[14px] font-semibold cursor-pointer">
            Switch
          </p>
        </div>
      </div>
      {/* suggsations */}
      <div>
        <div className="flex justify-between text-[14px] mt-4">
          <p className="text-slate-400 text-[15px] font-semibold">
            Suggestions For You
          </p>
          <p className="text-slate-100 cursor-pointer">See All</p>
        </div>

        {/* suggsations card container */}
        <div>
          {/* card */}
          {suggsationsData.map((data) => (
            <div
              className="flex items-center justify-between mt-3"
              key={data.id}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center p-[2px] w-[45px] h-[45px]">
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
                <div>
                  <p className="text-slate-300 text-[14px] font-semibold hover:underline cursor-pointer">
                    {data.username}
                  </p>
                  <p className="text-slate-500 text-[13px]">followed by omuk</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sky-400 text-[14px] cursor-pointer font-semibold">
                  Follow
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-slate-600 text-[14px] font-semibold mt-6">
        <ul className="flex gap-4 cursor-pointer mb-4">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">Join</li>
          <li className="hover:underline">Help</li>
        </ul>
        <div>
          <p>© 2022 INSTAGRAM BY MD.RAKIB</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
