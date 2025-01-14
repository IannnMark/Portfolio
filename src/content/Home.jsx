import image from "../../public/images/Pic.JPG";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-1 py-10 sm:py-10 max-w-6xl mx-auto">
        <img
          src={image}
          alt="Pic"
          className="h-20 w-20 rounded-full mt-20 cursor-pointer"
        />

        <h1 className=" text-white font-medium text-[30px] sm:text-[70px] md:text-[100px] whitespace-nowrap text-center font-sans">
          <span className="whitespace-nowrap">Building websites</span>
          <br />
          <span className="block">that deliver results</span>
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg font-medium text-center">
          I build clean, user-focused websites with seamless functionality.
        </p>
        <button className="bg-white text-black px-4 py-4 mt-5 rounded-md font-medium hover:scale-105 transition duration-300">
          View my Works 👀
        </button>
      </div>
    </div>
  );
}