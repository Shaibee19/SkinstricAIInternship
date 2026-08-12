import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
        <div class="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <div class="absolute inset-0 flex items-center justify-center lg:hidden">
            <div class="w-87.5 h-87.5 border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 translate-x-[-52%] -translate-y-1/2"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center lg:hidden">
            <div class="w-105 h-105 border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 translate-x-[-52%] -translate-y-1/2"></div>
          </div>
          <div id="main-heading" class="relative z-10 text-center">
            <h1
              class="text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal tracking-tighter leading-none opacity-0"
              style="opacity: 1;"
            >
              Sophisticated
              <br>
                <span class="block text-[#1A1B1C]">skincare</span>
              </br>
            </h1>
          </div>
          <p class="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground text-[#1a1b1c83]">
            Skinstric developed an A.I. that creates a highly-personalized
            routine tailored to what your skin needs.
          </p>
          <div class="z-10 mt-4 lg:hidden">
            <a href="/testing">
              <button class="relative flex items-center gap-4 hover:scale-105 duration-300">
                <span class="text-[12px] font-bold cursor-pointer">
                  ENTER EXPERIENCE
                </span>
                <div class="w-6 h-6 border border-solid border-black rotate-45 cursor-pointer"></div>
                <span class="absolute left-8 scale-[0.5] hover:scale-60 duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="fill-current text-black"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>
          <div class="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] [@media(width&gt;=1920px)]:left-[calc(-33vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
            <p>
              Skinstric developed an A.I. that creates a
              <br>highly-personalized routine tailored to</br>what your skin
              needs.
            </p>
          </div>
          <div
            id="left-section"
            class="hidden lg:block fixed left-[calc(-53vw)] xl:left-[calc(-50vw)] top-1/2 -translate-y-1/2 w-125 h-125 transition-opacity duration-500 ease-in-out opacity-100"
          >
            <div class="relative w-full h-full">
              <div class="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 fixed inset-0"></div>
              <button
                id="discover-button"
                class="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/5 xl:translate-x-1/6 [@media(width&gt;=1920px)]:translate-x-1/20 px-3 py-1"
              >
                <div class="w-7.5 h-7.5 border border-solid border-black rotate-45 cursor-pointer group-hover:scale-110 duration-300"></div>
                <span class="absolute left-4.5 top-2 scale-[0.9] rotate-180 group-hover:scale-105 duration-300">
                  ▶
                </span>
                <span>DISCOVER A.I.</span>
              </button>
            </div>
          </div>
          <div
            id="right-section"
            class="hidden lg:block fixed top-1/2 right-[calc(-53vw)] xl:right-[calc(-50vw)] -translate-y-1/2 w-125 h-125 transition-opacity duration-500 ease-in-out opacity-100"
          >
            <div class="relative w-full h-full">
              <div class="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
              <a href="/testing">
                <button
                  id="take-test-button"
                  class="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 h-9 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6 [@media(width&gt;=1920px)]:-translate-x-1/20 px-3 py-1"
                >
                  TAKE TEST
                  <div class="w-7.5 h-7.5 border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
                  <span class="absolute left-26.75 top-2.25 scale-[0.9] cursor-pointer group-hover:scale-105 duration-300">
                    ▶
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
