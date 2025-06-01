import React from "react";

const words = [
  "Interactive",
  "Scalable",
  "User Friendly",
  "Usable",
  "Reliable",
  "Secure",
  "Accessible",
  "Maintainable",
  "Search Optimized",
  "Trustworthy",
];

const Tape = () => {
  return (
    <div className="py-16">
      <div>
        <div className="flex bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-1">
            <div className="flex flex-none gap-4 py-3">
              {[...words, ...words].map((item, index) => (
                <div className="inline-flex gap-4 items-center" key={index}>
                  <h2 className="text-gray-900 font-semibold uppercase text-sm">
                    {item}
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                      className="w-4 h-4 -rotate-12 text-gray-900"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
