import leftBracket from "../assets/navbar/left-bracket.png";
import rightBracket from "../assets/navbar/right-bracket.png";

export default function Navbar() {
  return (
    <nav className="w-full h-[64px] flex items-center justify-between px-6 md:px-10 bg-white relative z-[1000]">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="text-[#1A1B1C] font-semibold text-sm tracking-tight"
        >
          SKINSTRIC
        </a>

        <img
          src={leftBracket}
          alt="left bracket"
          className="w-[4px] h-[17px]"
        />

        <p className="text-[#1A1B1C80] font-semibold text-sm tracking-tight">
          INTRO
        </p>

        <img
          src={rightBracket}
          alt="right bracket"
          className="w-[4px] h-[17px]"
        />
      </div>

      {/* Right Section */}
      <button className="bg-[#1A1B1C] text-white text-[10px] font-semibold h-9 px-4 flex items-center justify-center tracking-tight hover:bg-black transition">
        ENTER CODE
      </button>
    </nav>
  );
}
