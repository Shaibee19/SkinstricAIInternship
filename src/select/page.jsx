import { useState } from "react";
import BackButton from "../components/BackButton";
import diamondLarge from "../assets/diamonds/diamond-large.png";
import diamondMedium from "../assets/diamonds/diamond-medium.png";
import diamondSmall from "../assets/diamonds/diamond-small.png";

export default function SelectPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-white">

      {/* Header */}
      <div className="absolute top-10 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      {/* Main Content */}
      <div className="h-[78.3vh] flex flex-col items-center justify-center bg-white">
        <div className="relative">
          {/* Diamond Background Animations */}
          <div className="relative w-[400px] h-[400px]">
            <img
              src={diamondSmall}
              alt="Diamond Small"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={diamondMedium}
              alt="Diamond Medium"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={diamondLarge}
              alt="Diamond Large"
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Selection Buttons Grid */}
          <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">

            {/* Top Center Button */}
            <div className="flex items-center justify-center col-start-2">
              <a href="/summary">
                <button
                  onMouseEnter={() => setHovered("demographics")}
                  onMouseLeave={() => setHovered(null)}
                  className={`w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold uppercase leading-[24px] tracking-tight transition-all duration-300 ${
                    hovered === "demographics" ? "scale-[1.05]]" : ""
                  }`}
                >
                  <span className="-rotate-45">Demographics</span>
                </button>
              </a>
            </div>

            {/* Middle Left Button */}
            <div className="flex items-center justify-center row-start-2 col-start-1">
              <button
                onMouseEnter={() => setHovered("cosmetic")}
                onMouseLeave={() => setHovered(null)}
                className={`w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 rotate-45 flex items-center justify-center -m-5 font-semibold uppercase leading-[24px] tracking-tight cursor-not-allowed transition-all duration-300 ${
                  hovered === "cosmetic" ? "scale-[1.05]" : ""
                }`}
              >
                <span className="-rotate-45">Cosmetic Concerns</span>
              </button>
            </div>

            {/* Middle Right Button */}
            <div className="flex items-center justify-center row-start-2 col-start-3">
              <button
                onMouseEnter={() => setHovered("skin")}
                onMouseLeave={() => setHovered(null)}
                className={`w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 rotate-45 flex items-center justify-center -m-5 font-semibold uppercase leading-[24px] tracking-tight cursor-not-allowed transition-all duration-300 ${
                  hovered === "skin" ? "scale-[1.05]" : ""
                }`}
              >
                <span className="-rotate-45">Skin Type Details</span>
              </button>
            </div>

            {/* Bottom Center Button */}
            <div className="flex items-center justify-center row-start-3 col-start-2">
              <button
                onMouseEnter={() => setHovered("weather")}
                onMouseLeave={() => setHovered(null)}
                className={`w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 rotate-45 flex items-center justify-center -m-5 font-semibold uppercase leading-[24px] tracking-tight cursor-not-allowed transition-all duration-300 ${
                hovered === "weather" ? "scale-[1.05]" : ""
              }`}
              >
                <span className="-rotate-45">Weather</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bottom */}
      <div className="pt-4 md:pt-12 pb-8 bg-white sticky md:static bottom-40">
        <div className="flex justify-between w-full px-13 md:px-9">

          {/* Back Button */}
          <BackButton href="/result" label="BACK" />

          {/* Summary Button */}
          <a href="/summary">
            <div>

              {/* Mobile */}
              <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                  SUM
                </span>
              </div>

              {/* Desktop */}
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <span className="text-sm font-semibold hidden sm:block mr-5">
                  GET SUMMARY
                </span>
                <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current text-black absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
