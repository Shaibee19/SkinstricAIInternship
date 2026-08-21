import ProceedButton from "./buttons/ProceedButton";
import BackButton from "./buttons/BackButton";

export default function TestingThankYou({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[3000]">

      {/* Dotted Squares */}
      <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
        <div className="absolute inset-0 border border-gray-300 rotate-45 opacity-60"></div>
        <div className="absolute inset-0 border border-gray-300 rotate-[55deg] opacity-40"></div>
        <div className="absolute inset-0 border border-gray-300 rotate-[65deg] opacity-30"></div>
      </div>

      {/* Text */}
      <p className="text-[#1A1B1C] text-lg md:text-xl mt-6 tracking-wide font-semibold">
        Thank you!
      </p>
      <p className="text-[#1A1B1C] text-sm md:text-base mt-1 tracking-wide">
        Proceed for the next step
      </p>

      {/* Buttons */}
      <div className="flex justify-between w-full px-10 mt-10">

        <BackButton href="/testing" label="BACK" />

        <div className="animate-slide-in-right">
          <ProceedButton href="/result" label="PROCEED" />
        </div>

      </div>
    </div>
  );
}
