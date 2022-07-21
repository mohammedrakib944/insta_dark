import React, { useState, useEffect } from "react";
import { VscSmiley } from "react-icons/vsc";
import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import Link from "next/link";

import img1 from "../public/assets/2.jpg";
import { storys } from "../public/data/story";

const Stories = () => {
  const [cunt, setCunt] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    const filtered = storys.filter((val) => val.id === cunt);
    setData(filtered[0]);
  }, [cunt]);

  return (
    <div className="w-full h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <h1 className="col-span-4 pl-4 pt-4 font-logoFont text-3xl text-slate-100 cursor-pointer">
              Instagram
            </h1>
          </Link>
          <Link href="/">
            <a className="text-2xl pt-4 mr-3">
              <BsXLg />
            </a>
          </Link>
        </div>
        <div className="fixed text-3xl left-6 md:left-[20%] lg:left-[30%] md: top-[48%] translate-y-[-50%] z-50 text-white/50">
          <button
            className="cursor-pointer disabled:opacity-[0.2] shadow-lg shadow-black/30 rounded-full disabled:cursor-not-allowed"
            onClick={() => setCunt(cunt - 1)}
            disabled={cunt === 1}
          >
            <AiFillLeftCircle />
          </button>
        </div>
        <div className="fixed text-3xl right-6 md:right-[20%] lg:right-[30%] md: top-[48%] translate-y-[-50%] z-50 text-white/50">
          <button
            className="cursor-pointer disabled:opacity-[0.2] shadow-lg shadow-black/30 rounded-full disabled:cursor-not-allowed"
            onClick={() => setCunt(cunt + 1)}
            disabled={storys.length === cunt}
          >
            <AiFillRightCircle />
          </button>
        </div>

        {/* card */}
        <div
          className="w-full min-h-[80vh] just-center py-4 mt-4"
          id={data?.id}
        >
          <div className="bg-slate-800/30 rounded-lg relative">
            <div className="absolute flex gap-2 items-center p-3">
              <div className="flex items-center p-[2px] w-[50px] h-[50px]">
                <div className="w-full h-full p-[2px] rounded-full cursor-pointer">
                  <Image
                    src={data?.dp?.src || img1}
                    className="rounded-full"
                    alt="DP"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold text-[14px] cursor-pointer">
                  {data?.name}
                </p>
                <p className="text-[12px] text-slate-400">{data?.time}</p>
              </div>
            </div>
            <div className="min-w-[350px] md:min-w-[480px] max-w-[400px] md:max-w-[550px] min-h-[78vh] flex flex-col justify-center">
              <Image
                src={data?.story?.src || img1}
                layout="responsive"
                width="100%"
                height="100%"
                objectFit="contain"
                alt="story"
              />
            </div>
            <div className="px-6 pb-4  flex items-center justify-between">
              <div className="w-full flex items-center gap-2 px-4 py-2 text-slate-100 text-2xl border rounded-full border-slate-500">
                <VscSmiley />
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none text-[14px]"
                  placeholder={`Replay to ${data.name}`}
                />
              </div>
              <div className="flex gap-2 text-2xl pl-4">
                <div className="hover:text-slate-400 cursor-pointer">
                  <BiHeart />
                </div>
                <div className="hover:text-slate-400 cursor-pointer">
                  <TbSend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
