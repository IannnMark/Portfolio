import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../images/color_white_primary_logo.png";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-black shadow-lg py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 border border-gray-600 rounded-lg py-3">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Logo"
            className="h-5 w-[78px] sm:h-14 sm:w-auto flex-shrink-0 hover:opacity-95 hover:shadow-current hover:scale-105 rounded transition duration-300"
          />
        </Link>

        <div className="hidden sm:flex gap-4 flex-grow justify-center">
          <nav className="flex gap-6 uppercase font-normal text-gray-400 text-[16px]">
            <a
              href="#Projects"
              className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2"
            >
              Projects
            </a>
            <a
              href="#about"
              className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2"
            >
              Contact
            </a>
            <a className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2">
              CV
            </a>
          </nav>
        </div>

        <div>
          <a href="#contact">
            <button className="hidden sm:flex bg-white text-black p-2 px-5 rounded-lg border border-black text-[16px] font-normal hover:scale-105 transition duration-300">
              Get in touch
            </button>
          </a>
        </div>
        <div className="relative sm:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="font-bold text-white text-xl w-[14px] h-[16px] hover:shadow-lg flex-shrink-0 transition duration-300 hover:text-neutral-500 hover:scale-105"
          >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>

          {showMenu && (
            <div
              className="absolute top-10 right-0 bg-white shadow-current flex flex-col items-start p-4 gap-3 z-10 w-48"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="#Projects"
                className="uppercase text-black hover:shadow-current transition duration-300 hover:scale-105"
                onClick={() => setShowMenu(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className="uppercase text-black hover:shadow-current transition duration-300 hover:scale-105"
                onClick={() => setShowMenu(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="uppercase text-black hover:shadow-current transition duration-300 hover:scale-105"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </a>
              <a
                href="#cv"
                className="uppercase text-black hover:shadow-current transition duration-300 hover:scale-105"
              >
                CV
              </a>
              <a
                href="#contact"
                className="uppercase text-black hover:shadow-current transition duration-300 hover:scale-105"
              >
                Get in touch
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
