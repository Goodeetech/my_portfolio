import React from "react";

import memojiAvatar1 from "../../assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "../../assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "../../assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "../../assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "../../assets/images/memoji-avatar-5.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];
const Testimonial = () => {
  return (
    <div className="my-16 mx-6">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3 className="uppercase text-center bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-xl tracking-widest">
          Happy Client
        </h3>
        <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold text-">
          What Clients Say about Me
        </h1>
        <h4 className="md:text-lg text-md text-gray-500 text-center md:max-w-lg max-w-md">
          Don't just take my words for it. See what my clients have to say about
          my works.
        </h4>
      </div>

      <div className="flex overflow-x-clip mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex  flex-none gap-8 md:gap-12 my-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 outline-2 outline-gray-600 rounded-xl max-w-xs md:max-w-md lg:max-w-lg p-4 md:p-6 lg:p-8"
            >
              <div className="flex items-center gap-2">
                <div className=" rounded-full bg-gray-700 inline-flex justify-center items-center">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    height={40}
                    width={40}
                  />
                </div>
                <div>
                  <h2 className="text-sm text-gray-200">{item.name}</h2>
                  <h4 className="text-xs text-gray-400">{item.position}</h4>
                </div>
              </div>
              <div className=" mt-4">
                <h3 className="text-gray-300 text-xs md:text-sm">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
