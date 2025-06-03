import { ArrowUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  const footer = [
    {
      name: "Whatsapp",
      link: "",
    },
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "X",
      link: "",
    },
    {
      name: "Telegram",
      link: "",
    },
  ];
  return (
    <footer className="border-t border-gray-500   py-8 mx-6 relative overflow-x-clip">
      <div className="absolute  bottom-0 left-1/2 w-[1600px] h-[400px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
      <div className=" px-14 justify-center text-gray-300 text-sm flex flex-col md:flex-row gap-16 items-center z-10">
        <h3>&copy; 2025 Goodéé. All rights reserved.</h3>
        <div className="flex gap-4 lg:gap-8 flex-col md:flex-row items-center">
          {footer.map((item, index) => (
            <a
              href=""
              className="group relative flex items-center gap-1"
              key={index}
            >
              <h2 className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 group-hover:after:w-full">
                {item.name}
              </h2>
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
