import logo from "../../images/color_white_primary_logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="flex gap-5 text-neutral-700 my-12 items-center justify-center">
        <h3 className="font-normal text-[16px]">Projects</h3>
        <h3 className="font-normal text-[16px]">About</h3>
        <h3 className="font-normal text-[16px]">Contact</h3>
        <h3 className="font-normal text-[16px]">CV</h3>
      </div>
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-[118px] h-[34px]" />
      </div>
      <div className="flex items-center justify-center text-neutral-700 gap-3 my-10">
        <a href="https://www.linkedin.com/in/ian-mark-morga-994136295/">
          <FaLinkedin className="w-[24px] h-[24px]" />
        </a>

        <a href="https://github.com/IannnMark">
          <FaGithub className="w-[24px] h-[24px]" />
        </a>
      </div>
      <div className="flex items-center text-center justify-center my-10">
        <p className="text-[16px] font-normal text-neutral-700">
          All rights reserved. © Copyright Ian Mark Morga{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
