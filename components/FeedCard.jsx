import { TbDots, TbSend } from "react-icons/tb";
import { BiHeart, BiMessageRounded, BiBookmark } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import Image from "next/image";

const FeedCard = (props) => {
  const { dp, name, from, likes, comments, time } = props.data;
  return (
    <div className="w-full py-3 mb-4 md:bg-slate-800 md:rounded-lg md:border border-slate-700 overflow-hidden">
      <div className="w-full">
        {/* header */}
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center justify-between gap-2 cursor-pointer">
            <div className="flex items-center p-[2px] w-[50px] h-[50px] image-border">
              <div className="w-full h-full p-[2px] bg-slate-700 rounded-full">
                <Image
                  className="rounded-full"
                  alt="rakib"
                  src={dp}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <p className="text-slate-100 font-semibold">{name}</p>
              <p className="text-slate-400 text-[12px]">{from}</p>
            </div>
          </div>
          <div className="text-slate-100 text-xl cursor-pointer">
            <TbDots />
          </div>
        </div>

        {/* image */}
        <div className="w-full max-h-[550px] overflow-hidden bg-black my-3 relative">
          <Image src={dp} alt="rakib" layout="responsive" objectFit="contain" />
        </div>

        {/* reactions */}
        <div className="px-3 grid grid-cols-10 text-slate-100 text-2xl">
          <div className="col-span-4 flex gap-3">
            <div className="cursor-pointer hover:text-slate-400">
              <BiHeart />
            </div>
            <div className="cursor-pointer hover:text-slate-400">
              <BiMessageRounded />
            </div>
            <div className="cursor-pointer hover:text-slate-400">
              <TbSend />
            </div>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-2 flex justify-end">
            <div className="cursor-pointer hover:text-slate-400">
              <BiBookmark />
            </div>
          </div>
        </div>
        <div className="px-3">
          <p className="py-2 font-semibold text-slate-100 text-[14px]">
            {likes} likes
          </p>
          <p className="text-slate-300 tracking-wide text-[14px]">
            <span className="font-semibold text-slate-100">{name}</span> Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Id, odio.
            <span className="text-slate-400 cursor-pointer"> ...more</span>
          </p>
          <p className="text-slate-400 py-2 font-semibold text-[14px]">
            View {comments} comment
          </p>
          <p className="text-slate-400 text-[10px] uppercase">
            {time} HOURS AGO
          </p>
        </div>
        <div className="px-3 pt-2 mt-3 border-t border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-100 text-2xl">
            <VscSmiley />
            <input
              type="text"
              className="w-[250px] bg-transparent focus:outline-none text-[14px]"
              placeholder="Add a comment..."
            />
          </div>
          <p className="text-sky-700 font-semibold cursor-pointer hover:text-sky-400">
            Post
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
