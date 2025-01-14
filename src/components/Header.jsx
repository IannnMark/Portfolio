import { Link } from "react-router-dom";
import Logo from "../../public/images/color_white_primary_logo.png";

export default function Header() {
  return (
    <header className="bg-black shadow-lg py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 border border-gray-600 rounded-lg py-3">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-36 flex-shrink-0 hover:opacity-95 hover:shadow-current hover:scale-105 rounded transition duration-300"
          />
        </Link>

        <div className="hidden sm:flex gap-4 flex-grow justify-center">
          <nav className="flex gap-6 uppercase font-normal text-gray-400 text-[16px]">
            <a className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2">
              Projects
            </a>
            <a className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2">
              About
            </a>
            <a className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2">
              Contact
            </a>
            <a className="inline-block hover:opacity-95 hover:shadow-current hover:text-white hover:scale-105 rounded transition duration-300 px-4 py-2">
              CV
            </a>
          </nav>
        </div>

        <div>
          <button className="bg-white text-black p-2 px-5 rounded-lg border border-black">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
}
