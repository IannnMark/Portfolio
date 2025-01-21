import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import profile1 from "../../images/profile1.png";
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
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center py-10 sm:py-10 max-w-6xl mx-auto">
        <ParticleBackground />

        <img
          src={profile}
          alt="Pic"
          className="w-20 h-20 rounded-full mt-20 cursor-pointer"
        />

        <h1 className=" text-white font-medium text-[38px] md:text-[100px] whitespace-nowrap text-center font-sans m-0 leading-tight">
          <span className="whitespace-nowrap">Building websites</span>
          <br />
          <span className="block">that deliver results</span>
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg font-medium text-center">
          I build clean, user-focused websites with seamless functionality.
        </p>
        <a href="#Projects">
          <button className="bg-white text-black px-4 py-4 mt-5 rounded-lg font-medium hover:scale-105 transition duration-300">
            View my Works 👀
          </button>
        </a>
      </div>

      <div className="my-20">
        <div className="flex flex-col items-center mb-5">
          <p className="text-white text-sm font-normal">
            Tech stacks that I use:
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-neutral-800 py-7">
          <div className="overflow-x-auto py-4 w-full">
            <div className="flex gap-10 mx-4 text-neutral-600 font-medium text-sm sm:text-base animate-marquee whitespace-nowrap">
              <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
                <img
                  src={mongoDBicon1}
                  alt="mongoDb icon"
                  className="w-5 h-11 min-w-[5rem] min-h-[3rem] object-contain"
                />
                <img
                  src={mongoDBicon}
                  alt="mongoDb icon"
                  className="w-[151px] h-8 min-w-[151px] min-h-[2rem] object-contain"
                />
              </span>
              <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
                <img
                  src={express}
                  alt="expressIcon"
                  className="w-[215px] h-12 min-w-[215px] min-h-[3rem] object-contain"
                />
              </span>
              <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
                <img
                  src={reactIcon}
                  alt="reactIcon"
                  className="w-[54px] h-12 min-w-[54px] min-h-[3rem] object-contain"
                />
                <img
                  src={reactIcon1}
                  alt="reactIcon"
                  className="w-[81px] h-6 min-w-[81px] min-h-[2rem] object-contain"
                />
              </span>
              <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
                <img
                  src={nodeIcon}
                  alt="nodeIcon"
                  className="w-[168px] h-12 min-w-[168px] min-h-[3rem] object-contain"
                />
              </span>
              <span className="flex items-center gap-2 px-3 py-2 bg-neutral-800 rounded-lg h-12">
                <img
                  src={tailwindIcon}
                  alt="tailwindIcon"
                  className="w-[257px] h-8 min-w-[257px] min-h-[2rem] object-contain"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-white text-[32px] md:text-[60px] font-medium flex flex-col items-center">
          Recent Projects
        </h1>

        <div
          className="flex flex-col items-center justify-center gap-10 my-10"
          id="Projects"
        >
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700 w-[327px] h-[245px] md:w-[602px] md:h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={blessedland}
                  alt="BlessedLand"
                  className="h-[218px] w-[307px] md:h-[403px] md:w-[567px] rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[602px] gap-4 md:gap-0">
                <p className="text-white text-left self-start md:self-center text-[22px] md:text-[24px] font-medium">
                  Blessed Land Academy System
                  <span className="block md:inline md:ml-2 text-[20px] text-left">
                    (BLAS)
                  </span>
                </p>
                <Link
                  to={"https://www.blessedlandacademy.online/"}
                  className="ml-auto"
                >
                  <p className="text-neutral-700 hover:scale-105 transition duration-300 text-base">
                    Live Preview
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700 w-[327px] h-[245px] md:w-[602px] md:h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={proCapture}
                  alt="ProCapture"
                  className="h-[218px] w-[307px] md:h-[403px] md:w-[567px] rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[602px] gap-4 md:gap-0">
                <p className="text-white text-left self-start md:self-center text-[22px] md:text-[24px] font-medium">
                  Pro Capture Camera Store
                </p>
                <Link
                  to={"https://camera-store-client.vercel.app/"}
                  className="ml-auto"
                >
                  <p className="text-neutral-700 hover:scale-105 transition duration-300 text-base">
                    Live Preview
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700 w-[327px] h-[245px] md:w-[602px] md:h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={downUnderBrews}
                  alt="DownUnderBrews"
                  className="h-[218px] w-[307px] md:h-[403px] md:w-[567px] rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[602px] gap-4 md:gap-0">
                <p className="text-white text-left self-start md:self-center text-[22px] md:text-[24px] font-medium">
                  Down Under Brews Coffee Shop
                </p>
                <Link
                  to={"https://down-under-brews.vercel.app/"}
                  className="ml-auto"
                >
                  <p className="text-neutral-700 hover:scale-105 transition duration-300 text-base">
                    Live Preview
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="shadow-md hover:shadow-lg bg-neutral-700 w-[327px] h-[245px] md:w-[602px] md:h-[451px] flex items-center justify-center rounded-lg">
                <img
                  src={Recipe}
                  alt="Recipe"
                  className="h-[218px] w-[307px] md:h-[403px] md:w-[567px] rounded-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[602px] gap-4 md:gap-0">
                <p className="text-white text-left self-start md:self-center text-[22px] md:text-[24px] font-medium">
                  Recipe Sharing Application
                </p>
                <Link
                  to={"https://github.com/IannnMark/Recipe-Application-Client"}
                  className="ml-auto"
                >
                  <p className="text-neutral-700 hover:scale-105 transition duration-300 text-base">
                    GitHub Code
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col md:flex-row justify-center md:p-16"
      >
        <div
          className="w-[327px] h-[403px] md:w-[547px] md:h-[733px] rounded-lg order-1 md:order-2 mx-auto md:mx-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${profile1})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
        <div className="max-w-lg p-10 md:flex-row order-2 md:order-1">
          <h1 className="m-0 leading-tight text-white font-medium text-[32px] md:text-[60px] my-1 md:my-10 text-left">
            <span className="whitespace-nowrap">Bringing ideas to life</span>
            <br />
            <span className="block">through code</span>
          </h1>
          <p className="text-white font-normal text-[16px] md:text-[18px] text-left">
            Hi, I’m Ian! I’m a full-stack developer with 2 years of experience
            creating reliable, scalable, and innovative web solutions. I
            specialize in both front-end and back-end development, blending
            functionality with great user experiences.
          </p>

          <p className="text-white font-normal text-[16px] md:text-[18px] my-7 text-left">
            Outside of work, I enjoy playing games and watching videos, which
            often inspire new ideas and keep me connected to the latest trends
            in tech specifically in web development
          </p>
          <div>
            <a href="https://drive.google.com/file/d/1RRUGdlUhmglwb3Wj-9qsk0y4ILqvl9uF/view?usp=sharing">
              <button className="px-4 py-2 bg-white text-black rounded-lg hover:scale-105 transition duration-300">
                Download my CV
              </button>
            </a>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="bg-neutral-700 w-[327px] h-[206px] md:w-[1237px] md:h-[162px] flex items-center justify-center mx-auto rounded-lg"
      >
        <div className="flex flex-col md:flex-row text-center items-center justify-center gap-7">
          <p className="text-neutral-300 text-lg md:text-2xl">
            Interested in working with me? I’d love to hear from you!
          </p>

          <p className="text-neutral-700 bg-white rounded-lg px-4 py-4 text-base">
            ianmarkmorga07@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
