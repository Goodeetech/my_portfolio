import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="py-32 md:py-42 mx-6">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/memojicomp.png"}
          alt="Memoji"
          width={100}
          height={100}
          className=""
        />
        <div className="flex border border-white/20 p-2 rounded-lg items-center bg-black gap-4 justify-center">
          <div className="bg-green-600 size-2.5 rounded-full animate-pulse"></div>
          <div>
            <h3 className="text-sm">Available for new projects</h3>
          </div>
        </div>
      </div>
      <div className="text-center max-w-lg mx-auto mt-6">
        <div>
          <h3 className="text-3xl md:text-5xl tracking-wide font-semidold">
            Building Exceptional User Experience
          </h3>
          <h4 className="text-md md:text-lg  text-white/70 mt-4">
            I specialize in transforming designs into functional,
            high-performing web application. Let's discuss your next project
          </h4>
        </div>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default HeroSection;
