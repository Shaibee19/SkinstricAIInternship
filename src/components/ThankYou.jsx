import RotatingDiamonds from "./RotatingDiamonds";
import ProceedButton from "./buttons/ProceedButton";
import BackButton from "./buttons/BackButton";

export default function ThankYou({ show, onProceed }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-[3000]">

      {/* Dotted Squares */}
      <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <RotatingDiamonds show={show} size="large" showDots={false}>

        {/* Text */}
          <p className="text-[#1A1B1C] text-lg md:text-xl mt-6 tracking-wide font-semibold">
            Thank you!
          </p>
          <p className="text-[#1A1B1C] text-sm md:text-base mt-1 tracking-wide">
            Proceed to the next step
          </p>
          </RotatingDiamonds>
          </div>
      </div>

        {/* Buttons */}
        <div className="flex justify-between w-full px-10 mt-10">
          <BackButton href="/" label="BACK" />

          <div className="animate-slide-in-right">
            <ProceedButton onClick={onProceed} />
          </div>
        </div>
    </div>
  );
}
