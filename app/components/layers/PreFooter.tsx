import { Button } from "@/components/ui/button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import React from "react";

const PreFooter = () => {
  return (
    <div className="p-16 ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 px-6 text-gray-950  py-10">
        <div className=" md:max-w-full text-center md:text-start">
          <h2 className="text-3xl lg:text-4xl max-w-md lg:max-w-xl font-bold">
            Lets create something amazing together
          </h2>
          <h4 className="mt-2 max-w-md">
            Ready to bring your next project to life? Lets's connect and discuss
            how i can help you achieve your goals
          </h4>
        </div>
        <div>
          <Button className="!px-6 !py-6 tracking-wider lg:text-[16px] text-[15px]">
            Contact Me <ArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
