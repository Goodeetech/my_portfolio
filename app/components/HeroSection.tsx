import {
  ArrowBigLeft,
  ArrowDown,
  ArrowLeft,
  Star,
  StarHalf,
  StarIcon,
  StarOff,
  StarsIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import grain from "../../public/grain.jpg";
import HeroStar from "./layers/HeroStar";

const HeroSection = () => {
  return (
    <div className="py-32 md:py-40 px-6 relative overflow-x-clip ">
      <div
        className="inset-0 -z-1 absolute opacity-5"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      ></div>
      <div className="size-[460px] hero-grain"></div>
      <div className="size-[660px] hero-grain"></div>
      <div className="size-[860px] hero-grain"></div>
      <div className="size-[1060px] hero-grain"></div>
      <div>
        <HeroStar size={560} rotation={-72}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-8 h-8 text-emerald-400 opacity-20"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={300} rotation={100}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-6 h-6 text-emerald-400 opacity-60"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={740} rotation={-200}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-10 h-10 text-emerald-400 opacity-80"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={560} rotation={220}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-12 h-12 text-emerald-400 opacity-40"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={660} rotation={-72}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-12 h-12 text-emerald-400"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={800} rotation={-45}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-4 h-4 text-emerald-400"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={800} rotation={-290}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-5 h-5 text-emerald-400"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={700} rotation={820}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-7 h-7 text-emerald-400"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
        <HeroStar size={560} rotation={-20}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-4 h-4 text-emerald-400"
          >
            <path
              d="
      M50 0 
      C52 20, 52 20, 55 40 
      C80 48, 80 48, 100 50 
      C80 52, 80 52, 55 60 
      C52 80, 52 80, 50 100 
      C48 80, 48 80, 45 60 
      C20 52, 20 52, 0 50 
      C20 48, 20 48, 45 40 
      C48 20, 48 20, 50 0 
      Z
    "
            />
          </svg>
        </HeroStar>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/blackmemo.png"}
          alt="Memoji"
          width={140}
          height={120}
          className=""
        />
        <div className="flex border border-white/20 p-2 rounded-lg items-center bg-black gap-4 justify-center">
          <div className="bg-green-500 size-2.5 rounded-full animate-pulse"></div>
          <div>
            <h3 className="text-sm">Available for new projects</h3>
          </div>
        </div>
      </div>
      <div className="text-center max-w-lg mx-auto mt-6">
        <div>
          <h3 className="text-3xl md:text-5xl tracking-wide font-semibold">
            Hi, I'm Goodéé
          </h3>
          <h4 className="text-md md:text-lg text-white/70 mt-4">
            I turn ideas into fast, responsive, and visually stunning web
            applications. Whether you're starting from scratch or scaling up,
            I'm here to build something remarkable with you.
          </h4>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 lg:mt-6 mt-4 items-center justify-center  text-center">
        <div className="border w-fit bg-gray-900  border-white/20 p-2 rounded-lg  hover:bg-black   transition-colors cursor-pointer ">
          <button className="flex items-center gap-2 cursor-pointer">
            <h2>Explore My Works</h2>
            <ArrowDown />
          </button>
        </div>

        <button className="cursor-pointer ">
          <div className="flex bg-white py-2 px-3 rounded-lg text-gray-900 hover:bg-gray-200 transition-colors items-center gap-2 justify-center">
            <h2> 🤚</h2>
            <h2 className="font-semibold ">Let's Connect</h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
