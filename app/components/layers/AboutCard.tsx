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
      top: "20%",
      left: "50%",
    },
    { name: "Photography", icon: "📷", top: "5%", left: "14%" },
    { name: "Gaming", icon: "🎯", top: "33%", left: "37%" },
    { name: "Hiking", icon: "🚶‍♂️‍➡️", top: "58%", left: "35%" },
    { name: "Music", icon: "🎵", top: "50%", left: "10%" },
    { name: "Fitness", icon: "🤸", top: "80%", left: "10%" },
  ];
  return (
    <div
      className={`pt-4 px-4 ${
        image == "hello" ? "pb-0" : "pb-4"
      } bg-gray-800 rounded-lg outline-2 lg:h-[300px] outline-gray-600`}
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
        <h4 className="text-gray-400 text-sm mt-2 max-w-md">{subtitle}</h4>
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
              <div className="flex gap-4 flex-wrap relative flex-1 h-50 w-full ">
                {array.map((arr, index) => (
                  <div
                    key={index}
                    className="inline-flex gap-2 py-1.5 px-4 bg-gradient-to-r from-emerald-200 to-sky-400 rounded-full items-center font-semibold text-sm text-gray-950 absolute"
                    style={{
                      left: arr.left,
                      top: arr.top,
                    }}
                  >
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
