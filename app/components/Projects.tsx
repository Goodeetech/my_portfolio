import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import {
  ArrowDownAz,
  ArrowUp,
  ArrowUpRight,
  Check,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

const Projects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const Project = () => {
  return (
    <div className="mx-6">
      <div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <h2 className="uppercase text-emerald-300 text-xl text-center">
            Real world Result
          </h2>
          <h1 className="font-semibold text-2xl md:text-4xl text-center">
            Features Projects
          </h1>
          <h4 className="text-gray-400 md:text-lg text-md text-center ">
            See how i transformed concepts into engaging digital experience
          </h4>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-10 mt-8 ">
            {Projects.map((project, index) => (
              <div
                key={index}
                className="px-10 lg:px-14 py-6 bg-gray-800 outline outline-gray-700 rounded-lg flex gap-4"
              >
                <div>
                  <div className="flex flex-col gap-4">
                    <div className="uppercase flex text-sm text-emerald-300 gap-4">
                      <h2>{project.company}</h2> -<h3>{project.year}</h3>
                    </div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <hr className="border-gray-600 mt-4" />
                  <div className="mt-4 flex flex-col gap-4">
                    {project.results.map((result, idc) => (
                      <div
                        key={idc}
                        className="flex text-sm text-gray-400 gap-2 items-center"
                      >
                        <CheckCircle size={16} />
                        <h2>{result.title}</h2>
                      </div>
                    ))}
                  </div>
                  <button className="bg-white text-gray-900 px-4 py-2 w-fit mt-4 rounded-lg hover:bg-gray-200 transition-colors text-md font-semibold flex items-center gap-2 cursor-pointer">
                    <h3> Visit Live Site</h3>
                    <ArrowUpRight />
                  </button>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-lg ml-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
