import React from "react";
import "./navbar.css";
import Button from "../Button";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-10 flex h-20 w-full justify-between bg-[#0a192f] px-8 font-semibold xl:px-20 xl:shadow-xl">
        <div className="flex items-center">
          <a href="#">
            <img
              className="logo w-14"
              src="/src/assets/img/logo1.webp"
              alt="logo"
            />
          </a>
        </div>
        <ul className="hidden text-[#ccd6f6] xl:flex xl:items-center xl:gap-10">
          <li className="hover-navbar">
            <a href="#about">About</a>
          </li>
          <li className="hover-navbar">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover-navbar">
            <a href="#work">Work</a>
          </li>
          <li className="hover-navbar">
            <a href="#contact">Contact</a>
          </li>
          <li className="hover-navbar">
            <Button btnText="Resume" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
