import Image from "next/image";
import React from "react";
import Javascript from "../../../lib/svgs/javascript.svg";
import Html from "../../../lib/svgs/html.svg";
import Css from "../../../lib/svgs/css.svg";
import Chrome from "../../../lib/svgs/chrome.svg";
import Reactt from "../../../lib/svgs/react.svg";

const ToolsTip = () => {
  const skilsArray = [
    {
      name: "Javascript",
      image: Javascript,
    },
    {
      name: "HTML5",
      image: Html,
    },
    {
      name: "CSS3",
      image: Css,
    },
    {
      name: "React",
      image: Reactt,
    },
    {
      name: "Chrome",
      image: Chrome,
    },
  ];
  return (
    <div>
      <div className="flex gap-6 items-center  w-full ">
        {skilsArray.map((arr, index) => (
          <div key={index} className="px-3   py-1  ">
            <div
              key={index}
              className="inline-flex items-center justify-center gap-1 py-2 px-4 border-2 border-gray-500 rounded-lg whitespace-nowrap"
            >
              <Image
                src={arr.image}
                alt="image"
                height={20}
                width={20}
                className="bg-gradient-to-r from-emerald-400 to-sky-300"
              />
              <h2 className="text-sm tracking-wider">{arr.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsTip;
