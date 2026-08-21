import RotatingDiamonds from "./RotatingDiamonds";
import ProceedButton from "../buttons/ProceedButton";
import BackButton from "../buttons/BackButton";

export default function ThankYou({ show, onProceed }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-[4000]">

      {/* Rotating Diamonds with centered text */}
      <RotatingDiamonds show={show} size="large" showDots={false}>
        <p className="text-[#1A1B1C] text-lg md:text-xl tracking-wide font-semibold">
          Thank you!
        </p>
        <p className="text-[#1A1B1C] text-sm md:text-base mt-1 tracking-wide">
          Proceed to the next step
        </p>
      </RotatingDiamonds>

      {/* Buttons */}
      <div className="flex justify-between w-full px-10 mt-150 z-[5000]">
        <BackButton href="/" label="BACK" />

        <div className="animate-slide-in-right">
          <ProceedButton onClick={onProceed} />
        </div>
      </div>
    </div>
  );
}

