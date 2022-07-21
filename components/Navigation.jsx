import Link from "next/link";
import React from "react";
import Image from "next/image";

import { BiSearch, BiHeart } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusCircle } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

import img1 from "../public/assets/1.jpg";

const Navigation = () => {
  const links = [
    {
      url: "#",
      icon: <TiHome />,
    },
    {
      url: "#",
      icon: <RiMessengerLine />,
    },
    {
      url: "#",
      icon: <BsPlusCircle />,
    },
    {
      url: "#",
      icon: <FaRegCompass />,
    },
    {
      url: "#",
      icon: <BiHeart />,
    },
  ];

  return (
    <div className="w-full h-[60px] fixed bg-slate-800 border-b border-slate-700 z-50">
      <div className="wrapper mx-auto h-full grid grid-cols-11">
        <h1 className="col-span-4 pl-4 font-logoFont flex items-center text-3xl text-slate-100 -mt-1 cursor-pointer">
          Instagram
        </h1>

        <div className="col-span-3 hidden md:flex items-center">
          <div className="h-[38px] w-full flex items-center gap-2 bg-slate-900 px-3 rounded-lg">
            <span className="text-slate-100 text-lg">
              <BiSearch />
            </span>
            <input
              type="text"
              className="w-full bg-transparent text-slate-100 focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="col-span-7 h-full md:col-span-4 pr-4 flex justify-end">
          <ul className="flex items-center gap-3 md:gap-4 text-[24px] text-slate-200 ">
            {links.map((val, index) => (
              <Link href={val.url} key={index}>
                <a>{val.icon}</a>
              </Link>
            ))}
            <Link href="#">
              <a className="border border-slate-100 just-center rounded-full p-[1px]">
                <Image
                  className="rounded-full"
                  src={img1}
                  width="30px"
                  height="30px"
                  objectFit="cover"
                  alt="rakib"
                />
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
