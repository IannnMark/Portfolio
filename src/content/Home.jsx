import { Link } from "react-router-dom";
import image from "../../images/Pic.JPG";
import ParticleBackground from "./ParticleBackground";
import mongoDBicon from "../../images/MongoDB icon.png";
import mongoDBicon1 from "../../images/MongoDB icon1.png";
import express from "../../images/ExpressIcon.png";
import reactIcon from "../../images/ReactIcon.png";
import reactIcon1 from "../../images/ReactIcon1.png";
import nodeIcon from "../../images/NodeJsIcon.png";
import tailwindIcon from "../../images/TailwindCssIcon.png";
import blessedland from "../../images/blessedland.png";
import proCapture from "../../images/procapture.png";
import downUnderBrews from "../../images/downunderbrews.png";
import Recipe from "../../images/Recipe.png";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center py-10 sm:py-10 max-w-6xl mx-auto">
        <ParticleBackground />
        <img
          src={image}
          alt="Pic"
          className="h-20 w-20 rounded-full mt-20 cursor-pointer"
        />

        <h1 className=" text-white font-medium text-[30px] sm:text-[70px] md:text-[100px] whitespace-nowrap text-center font-sans m-0 leading-tight">
          <span className="whitespace-nowrap">Building websites</span>
          <br />
          <span className="block">that deliver results</span>
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg font-medium text-center">
          I build clean, user-focused websites with seamless functionality.
        </p>
        <button className="bg-white text-black px-4 py-4 mt-5 rounded-lg font-medium hover:scale-105 transition duration-300">
          View my Works 👀
        </button>
      </div>

      <div className="my-20">
        <div className="flex flex-col items-center mb-5">
          <p className="text-white text-sm font-normal">
            Tech stacks that I use:
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-neutral-800 py-7">
          <div className="flex gap-10 mx-4 text-neutral-600 font-medium text-sm sm:text-base ">
            <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
              <img
                src={mongoDBicon1}
                alt="mongoDb icon"
                className="w-5 h-11 object-contain"
              />
              <img
                src={mongoDBicon}
                alt="mongoDb icon"
                className="w-[151px] h-8 object-contain"
              />
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
              <img
                src={express}
                alt="expressIcon"
                className="w-[215px] h-12 object-contain"
              />
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
              <img
                src={reactIcon}
                alt="reactIcon"
                className="w-[54px] h-12 object-contain"
              />
              <img
                src={reactIcon1}
                alt="reactIcon"
                className="w-[81px] h-6 object-contain"
              />
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
              <img
                src={nodeIcon}
                alt="nodeIcon"
                className="w-[168px] h-12 object-contain"
              />
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
              <img
                src={tailwindIcon}
                alt="tailwindIcon"
                className="w-[257px] h-8 object-contain"
              />
            </span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-white text-[60px] font-medium flex flex-col items-center">
          Recent Projects
        </h1>

        <div className="flex flex-col items-center justify-center gap-10 my-10">
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700 w-[602px] h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={blessedland}
                  alt="BlessedLand"
                  className="h-[403px] w-[567px] rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center gap-24">
                <p className="text-white text-[24px] font-medium">
                  Blessed Land Academy System (BLAS)
                </p>

                <Link to={"https://www.blessedlandacademy.online/"}>
                  <p className="text-neutral-700 hover:scale-105 transition duration-300">
                    Live Preview
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700  w-[602px] h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={proCapture}
                  alt="ProCapture"
                  className="h-[403px] w-[567px] rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center gap-56">
                <p className="text-white text-[24px] font-medium">
                  Pro Capture Camera Store
                </p>
                <Link to={"https://camera-store-client.vercel.app/"}>
                  <p className="text-neutral-700 hover:scale-105 transition duration-300">
                    Live Preview
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700  w-[602px] h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={downUnderBrews}
                  alt="DownUnderBrews"
                  className="h-[403px] w-[567px] rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center gap-40">
                <p className="text-white text-[24px] font-medium">
                  Down Under Brews Coffee Shop
                </p>
                <Link to={"https://down-under-brews.vercel.app/"}>
                  <p className="text-neutral-700 hover:scale-105 transition duration-300">
                    Live Preview
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700  w-[602px] h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={Recipe}
                  alt="Recipe"
                  className="h-[403px] w-[567px] rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center gap-52">
                <p className="text-white text-[24px] font-medium">
                  Recipe Sharing Application
                </p>
                <Link
                  to={"https://github.com/IannnMark/Recipe-Application-Client"}
                >
                  <p className="text-neutral-700 hover:scale-105 transition duration-300">
                    GitHub Code
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
}
