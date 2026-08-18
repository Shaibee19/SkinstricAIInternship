import leftBracket from "../assets/navbar/left-bracket.png";
import rightBracket from "../assets/navbar/right-bracket.png";

export default function Navbar() {
  return (
    <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]">
        
      {/* Left Section */}
      <div className="flex flex-row pt-1 scale-75 justify-center items-center">
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000"
          href="/"
        >
          SKINSTRIC
        </a>
        <img
          src={leftBracket}
          alt="left-bracket"
          className="w-[4px] h-[17px]"
        />
        <p className="text-[#1a1b1c83] text-opacity-70  font-semibold text-sm ml-1.5 mr-1.5">
          INTRO
        </p>
        <img
          src={rightBracket}
          alt="right-bracket"
          className="w-[4px] h-[17px]"
        />
      </div>

      {/* Right Section */}
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold  transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
        ENTER CODE
      </button>
    </div>
  );
}
