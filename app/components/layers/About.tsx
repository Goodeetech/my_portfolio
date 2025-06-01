import React from "react";

const About = () => {
  return (
    <div className="mx-6 my-16">
      <div className="flex gap-4 flex-col justify-center items-center">
        <h2 className="uppercase bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent text-xl bg-clip-text tracking-widest">
          About Me
        </h2>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          A Glimpse Into my World
        </h4>
        <h4 className="text-md text-gray-500 max-w-sm text-center">
          Learn more about who i am, what i do, and what inspires me
        </h4>
      </div>
    </div>
  );
};

export default About;
