import diamondLarge from "../assets/diamond-large.png";
import diamondMedium from "../assets/diamond-medium.png";
import diamondSmall from "../assets/diamond-small.png";

export default function TestingPage() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center relative">
      {/* Top-left label */}
      <div className="absolute top-16 left-9 text-left">
        <p className="font-semibold text-xs">TO START ANALYSIS</p>
      </div>

      {/* Input Section */}
      <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
        <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
          CLICK TO TYPE
        </p>

        <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col items-center"></div>
          <input
            className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
            placeholder="Introduce Yourself"
            autocomplete="off"
            type="text"
            name="name"
          />
          <button type="submit" className="sr-only" fdprocessedid="8h0c4xp">
            Submit
          </button>
        </form>

        {/* Rotating Diamond Images */}
        <img
          src={diamondLarge}
          alt="Diamond Large"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
        />
        <img
          src={diamondMedium}
          alt="Diamond Medium"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185"
        />
        <img
          src={diamondSmall}
          alt="Diamond Small"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest"
        />
      </div>

      {/* Back Button */}
      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
        <a className="inset-0" aria-label="Back" href="/">
          <div>
            {/* Mobile */}
            <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 sm:hidden">
              <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                BACK
              </span>
            </div>

            {/* Desktop */}
            <div className="group hidden sm:flex flex-row relative justify-center items-center">
              <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
              <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                ▶
              </span>
              <span className="text-sm font-semibold hidden sm:block ml-6 ">
                BACK
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
