import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/memojicomp.png"}
          alt="Memoji"
          width={100}
          height={100}
          className=""
        />
        <div className="flex border border-white/40 p-2 rounded-lg items-center  gap-4 justify-center">
          <div className="bg-green-600 size-2.5 rounded-full"></div>
          <div>
            <h3>Available for new projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
