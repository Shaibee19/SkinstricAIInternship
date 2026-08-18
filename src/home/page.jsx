import leftRect from "../assets/home/home-rectangle-left.png";
import rightRect from "../assets/home/home-rectangle-right.png";
import iconLeft from "../assets/home/button-icon-shrunk-left.png";
import iconRight from "../assets/home/button-icon-shrunk-right.png";

export default function HomePage() {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-white">
      <main className="relative w-full h-full flex items-center justify-center overflow-hidden">

        {/* Center diamond (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[420px] h-[420px] border border-[#A0A4AB] rotate-45" />
        </div>

        {/* Dotted squares (mobile only) */}
        <div className="absolute inset-0 flex items-center justify-center lg:hidden">
          <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center lg:hidden">
          <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-[60px] lg:text-[100px] text-[#1A1B1C] font-normal tracking-tighter leading-none">
            Sophisticated
            <br />
            <span className="block">skincare</span>
          </h1>

          {/* Mobile paragraph + CTA */}
          <p className="mt-4 text-[16px] font-semibold text-[#1a1b1c83] w-[30ch] lg:hidden">
            Skinstric developed an A.I. that creates a highly-personalized routine
            tailored to what your skin needs.
          </p>

          <div className="mt-4 lg:hidden">
            <a href="/testing">
              <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
                <span className="text-[12px] font-bold cursor-pointer">
                  ENTER EXPERIENCE
                </span>
                <div className="w-6 h-6 border border-solid border-black rotate-45 cursor-pointer" />
                <span className="absolute left-8 scale-[0.5]">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current text-black"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Desktop paragraph (left) */}
        <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
          <p>
            Skinstric developed an A.I. that creates a
            <br />
            highly-personalized routine tailored to
            <br />
            what your skin needs.
          </p>
        </div>

        {/* Left diamond button */}
        <div className="hidden lg:block fixed left-[calc(-53vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={leftRect}
              alt="Left diamond"
              className="w-[260px] h-[260px] rotate-45"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 group inline-flex items-center gap-3 text-sm font-normal text-[#1A1B1C]">
              <img
                src={iconLeft}
                alt="Discover icon"
                className="w-[30px] h-[30px] rotate-45 group-hover:scale-110 duration-300"
              />
              <span>DISCOVER A.I.</span>
            </button>
          </div>
        </div>

        {/* Right diamond button */}
        <div className="hidden lg:block fixed right-[calc(-53vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={rightRect}
              alt="Right diamond"
              className="w-[260px] h-[260px] rotate-45"
            />
            <a href="/testing">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 group inline-flex items-center gap-3 text-sm font-normal text-[#1A1B1C]">
                <span>TAKE TEST</span>
                <img
                  src={iconRight}
                  alt="Take test icon"
                  className="w-[30px] h-[30px] rotate-45 group-hover:scale-110 duration-300"
                />
              </button>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
