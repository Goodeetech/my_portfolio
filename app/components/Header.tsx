import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full  fixed top-6 z-10">
      <nav className="flex gap-2 lg:gap-4 border-white/10 border  rounded-full bg-white/10 backdrop-blur-md ">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contacts" className="nav-item bg-white text-gray-800">
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Header;
