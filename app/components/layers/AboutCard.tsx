import Image from "next/image";
import React from "react";
import ToolsTip from "./ToolsTip";

const AboutCard = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: any;
}) => {
  const array = [
    {
      name: "Painting",
      icon: "🎨",
    },
    { name: "Photography", icon: "📷" },
    { name: "Gaming", icon: "🎯" },
    { name: "Hiking", icon: "🚶‍♂️‍➡️" },
    { name: "Music", icon: "🎵" },
    { name: "Fitness", icon: "🤸" },
  ];
  return (
    <div
      className={`pt-4 px-4 ${
        image == "hello" ? "pb-0" : "pb-4"
      } bg-gray-800 rounded-lg outline-2 outline-gray-600`}
    >
      <div className="flex items-center gap-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-6 h-6 text-green-400 "
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
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="overflow-hidden">
        <h4 className="text-gray-400 text-sm">{subtitle}</h4>
        {image === "hello" ? (
          <div className="flex justify-center items-center mt-2 -mb-14">
            <Image
              src={"/atomicce.png"}
              alt="atomic"
              height={150}
              width={150}
            />
          </div>
        ) : (
          <div className="mt-4 ">
            {image === "array" ? (
              <div>
                <ToolsTip />
                <ToolsTip />
              </div>
            ) : (
              <div>
                {array.map((arr, index) => (
                  <div key={index} className="flex gap-2">
                    <h2>{arr.name}</h2>
                    <h3>{arr.icon}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
