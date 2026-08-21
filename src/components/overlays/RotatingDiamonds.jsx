import diamondLarge from "../../assets/diamonds/diamond-large.png";
import diamondMedium from "../../assets/diamonds/diamond-medium.png";
import diamondSmall from "../../assets/diamonds/diamond-small.png";

export default function RotatingDiamonds({
  show = false,
  overlay = true,
  text = "",
  showDots = false,
  children,
}) {
  // Keep component mounted so animation never resets
  if (!show) {
    return (
      <div className="absolute inset-0 opacity-0 pointer-events-none"></div>
    );
  }

  return (
    <div
      className={
        overlay
          ? "fixed inset-0 bg-white flex flex-col items-center justify-center z-[3000] pointer-events-none"
          : "absolute inset-0 flex items-center justify-center z-[100] pointer-events-none"
      }
    >
      {/* Rotating Diamonds */}
      <img
        src={diamondLarge}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-[190deg]"
      />
      <img
        src={diamondMedium}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-[185deg]"
      />
      <img
        src={diamondSmall}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest"
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-[5000]">

        {/* Text */}
        {text && !children && (
          <p className="text-[#1A1B1C] text-sm md:text-base tracking-wide">
            {text}
          </p>
        )}

        {/* Bouncing Dots */}
        {showDots && (
          <div className="flex gap-2 mt-3">
            <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-1"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-2"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-3"></span>
          </div>
        )}

        {/* Custom children (ThankYou text, etc.) */}
        {children}
      </div>
    </div>
  );
}
