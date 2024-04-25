"use client";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../../../public/Spotify_Logo_RGB_White.png";
import { GrHomeRounded } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { GoPlus, GoGlobe } from "react-icons/go";

const HomeAside = () => {
  return (
    <>
      <aside className="col-span-1">
        <div className="font-semibold grid gap-5 bg-primary p-5 rounded-md mb-5">
          <Image src={LogoWhite} alt="spotify-logo" width={80} height={80} />
          <div className="text-[#bababa] cursor-pointer hover:text-white grid grid-cols-5 text-center">
            <GrHomeRounded size={20} />
            <h4 className="col-span-4 justify-self-start">Home</h4>
          </div>
          <div className="text-[#bababa] cursor-pointer hover:text-white grid grid-cols-5 text-center">
            <CiSearch size={25} />
            <h4 className="col-span-4 justify-self-start">Cari</h4>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center bg-primary p-2 rounded-md">
          <div className="group grid grid-cols-5 cursor-pointer p-5 col-span-3">
            <div className="w-9 h-5 flex gap-1">
              <div className="w-[2px] bg-slate-500 group-hover:bg-white"></div>
              <div className="w-[2px] bg-slate-500 group-hover:bg-white"></div>
              <div className="border-x-[10px] border-t-[5px] border-b-0 border-t-transparent border-r-transparent border-l-slate-500 group-hover:border-l-white"></div>
            </div>
            <h2 className="font-bold col-span-4 group-hover:text-white">
              Koleksi Kamu
            </h2>
          </div>
          <div className="group w-10 h-10 flex col-span-2 justify-self-end justify-center items-center rounded-full cursor-pointer hover:bg-slate-800">
            <GoPlus
              size={30}
              className="text-slate-500 group-hover:text-white"
            />
          </div>
          <div className="scrollbar col-span-5 grid gap-5 h-52 overflow-y-scroll py-3 scrollbar-hide">
            <div className="text-white font-semibold text-xs bg-[#242424] p-5 rounded-lg grid grin-row gap-4">
              <h4 className="text-base font-bold">Buat playlist pertamamu</h4>
              <p>Caranya mudah, kami akan membantu</p>
              <button className="w-32 bg-white rounded-full text-black px-4 py-2 text-sm font-bold">
                Buat playlist
              </button>
            </div>
            <div className="text-white font-semibold text-xs bg-[#242424] p-5 rounded-lg grid grin-row gap-4">
              <h4 className="text-base font-bold">Buat playlist pertamamu</h4>
              <p>Caranya mudah, kami akan membantu</p>
              <button className="w-32 bg-white rounded-full text-black px-4 py-2 text-sm font-bold">
                Buat playlist
              </button>
            </div>
          </div>
          <div className="p-5 grid gap-10">
            <Link
              href="#"
              className="hover:underline underline-offset-2 text-xs"
            >
              Cookie
            </Link>
            <div className="flex justify-center items-center gap-2 font-extrabold text-white border-[1px] border-slate-500 w-44 p-1 px-2 rounded-full hover:scale-[1.09] hover:border-white cursor-pointer">
              <GoGlobe size={20} />
              <h3 className="text-sm">Bahasa Indonesia</h3>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HomeAside;
