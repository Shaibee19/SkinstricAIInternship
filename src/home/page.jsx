import { useState } from "react";

export default function HomePage() {
  const [hoverState, setHoverState] = useState(null);

  return (
    <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
      <div className="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">

        {/* Mobile Dotted Diamonds */}
        <div className="absolute inset-0 flex items-center justify-center lg:hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45"></div>
        </div>

        {/* Heading */}
        <div className="animate-fade-in">
          <div className="relative z-10 text-center">
            <h1
              className={`
                text-[60px] lg:text-[100px] text-[#1A1B1C] font-normal tracking-tighter leading-none
                transition-all duration-500 ease-out
                ${hoverState === "left" ? "lg:translate-x-[250px]" : ""}
                ${hoverState === "right" ? "lg:-translate-x-[250px]" : ""}
              `}
            >
              Sophisticated
              <br />
              <span
                className={`
                  block text-[#1A1B1C] transition-all duration-500 ease-out
                  ${hoverState === "left" ? "lg:translate-x-[105px]" : ""}
                  ${hoverState === "right" ? "lg:-translate-x-[105px]" : ""}
                `}
              >
                skincare
              </span>
            </h1>
          </div>
        </div>

        {/* Paragraph - Mobile */}
        <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-[#1a1b1c83]">
          Skinstric developed an A.I. that creates a highly-personalized routine
          tailored to what your skin needs.
        </p>

        {/* CTA - Mobile */}
        <div className="z-10 mt-4 lg:hidden">
          <a href="/testing">
            <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
              <span className="text-[12px] font-bold cursor-pointer">
                ENTER EXPERIENCE
              </span>
              <div className="w-6 h-6 border border-black rotate-45"></div>
              <span className="absolute left-32 scale-[0.5] transition-transform duration-300">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current text-black"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>

        {/* Paragraph - Desktop */}
        <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
          <p>
            Skinstric developed an A.I. that creates a
            <br />
            highly-personalized routine tailored to
            <br />
            what your skin needs.
          </p>
        </div>

        {/* Left Button */}
        <div
          onMouseEnter={() => setHoverState("left")}
          onMouseLeave={() => setHoverState(null)}
          className={`transition-all duration-500 ease-out ${
            hoverState === "right" ? "lg:opacity-0" : "lg:opacity-100"
          }`}
        >
          <div className="hidden lg:block fixed left-[calc(-53vw)] xl:left-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full border border-dotted border-[#A0A4AB] rotate-45"></div>

              <button
                className="group inline-flex items-center justify-center gap-4 text-sm font-normal text-[#1A1B1C] h-9 absolute top-1/2 right-0 -translate-y-1/2 px-3 py-1 whitespace-nowrap rounded-md cursor-pointer transition-all duration-300"
              >
                <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300"></div>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current text-black absolute left-4 top-[7px] scale-[0.9] rotate-180 group-hover:scale-105 duration-300"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                <span>DISCOVER A.I.</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <div
          onMouseEnter={() => setHoverState("right")}
          onMouseLeave={() => setHoverState(null)}
          className={`transition-all duration-500 ease-out ${
            hoverState === "left" ? "lg:opacity-0" : "lg:opacity-100"
          }`}
        >
          <div className="hidden lg:block fixed right-[calc(-53vw)] xl:right-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full border border-dotted border-[#A0A4AB] rotate-45"></div>

              <a href="/testing">
                <button
                  className="group inline-flex items-center justify-center gap-4 text-sm font-normal text-[#1A1B1C] h-9 absolute top-1/2 left-0 -translate-y-1/2 px-3 py-1 whitespace-nowrap rounded-md cursor-pointer transition-all duration-300"
                >
                  TAKE TEST
                  <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 duration-300"></div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current text-black absolute left-[95px] top-[7px] scale-[0.9] group-hover:scale-105 duration-300"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
