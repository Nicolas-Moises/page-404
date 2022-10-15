import logo from "../assets/logo.png";
import { useState } from "react";

import {
  RiMenuFill,
  RiCloseFill,
  RiHomeFill,
  RiBuilding4Fill,
  RiGiftFill,
  RiCustomerServiceFill,
} from "react-icons/ri";

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between h-20 items-center px-6">
      <div className="w-[70%] max-w-[300px]">
        <img src={logo} alt="logo" className="w-[100%]" />
      </div>

      <ul className="hidden md:flex gap-14 text-zinc-300">
        <li className="hover:text-cyan-800 transition-colors">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-cyan-800 transition-colors">
          <a href="#about">Sobre</a>
        </li>
        <li className="hover:text-cyan-800 transition-colors">
          <a href="#beneficies">Benefícios</a>
        </li>
        <li className="hover:text-cyan-800 transition-colors">
          <a href="#support">Suporte</a>
        </li>
      </ul>

      <div className="md:hidden">
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <RiCloseFill className="text-zinc-100" size={20} />
          ) : (
            <RiMenuFill className="text-zinc-100" size={20} />
          )}
        </div>

        <div
          className={`${
            !toggle ? "-left-full" : "left-0"
          }  absolute top-0 smooth-transition bg-gradient-to-l from-white/10 to-[#111] backdrop-blur-lg 
          z-10 min-w-[280px] w-2/3 h-screen px-6 py-24
          }`}
        >
          <ul className="flex flex-col gap-9 text-lg font-semibold text-zinc-300">
            <li>
              <a href="#home" className="flex gap-3 items-center">
                <RiHomeFill size={24} />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="flex gap-3 items-center">
                <RiBuilding4Fill size={24} />
                Sobre
              </a>
            </li>
            <li>
              <a href="#beneficies" className="flex gap-3 items-center">
                <RiGiftFill size={24} />
                Benefícios
              </a>
            </li>
            <li>
              <a href="#support" className="flex gap-3 items-center">
                <RiCustomerServiceFill size={24} />
                Suporte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
