import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Bank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end flex-1 items-center">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer  text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? close : menu}
          alt="Menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl py-3 sidebar`}
        >
          <ul className="list-none flex flex-col justify-end flex-1 items-center">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer  text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
