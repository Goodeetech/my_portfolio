import React from "react";
import AboutCard from "./AboutCard";

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
      <div className="mx-8 flex justify-center items-center ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4  mt-10 max-w-4xl mx-auto">
          <div className="col-span-1">
            <AboutCard
              title="My Reads"
              subtitle="Explore the books shaping my perspectives"
              image="hello"
            />
          </div>
          <div className="col-span-2">
            <AboutCard
              title="My Toolbox "
              subtitle="Explore the technology and tools that i use to craft exceptional digital experience"
              image="array"
            />
          </div>
          <div>
            <AboutCard
              title="Beyond the Code"
              subtitle="Explore my interest and hobbies beyond the digital realm"
              image="skills"
            />
          </div>
          <div className="p-4 bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
