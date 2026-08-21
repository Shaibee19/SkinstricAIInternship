import rectLg from "../assets/camera/cam-diamond-large.png";
import rectMd from "../assets/camera/cam-diamond-medium.png";
import rectSm from "../assets/camera/cam-diamond-small.png";

import dotLg from "../assets/diamonds/diamond-large.png";
import dotMd from "../assets/diamonds/diamond-medium.png";
import dotSm from "../assets/diamonds/diamond-small.png";

export default function RotatingDiamonds({
  show,
  size = "large",
  text = "",
  showDots = false,
  children,
}) {
  if (!show) return null;

  const isLarge = size === "large";

  const lg = isLarge ? dotLg : rectLg;
  const md = isLarge ? dotMd : rectMd;
  const sm = isLarge ? dotSm : rectSm;

  return (
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-[3000]">
      {/* Rotating Diamonds */}
      <div
        className={`relative ${isLarge ? "w-[300px] h-[300px] md:w-[420px] md:h-[420px]" : "w-[250px] h-[250px] md:w-[350px] md:h-[350px]"} flex items-center justify-center`}
      >
        <img
          src={lg}
          className="absolute inset-0 w-full h-full animate-spin-slow"
          alt=""
        />
        <img
          src={md}
          className="absolute inset-0 w-full h-full animate-spin-slower"
          alt=""
        />
        <img
          src={sm}
          className="absolute inset-0 w-full h-full animate-spin-slowest"
          alt=""
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {text && (
            <p className="text-[#1A1B1C] text-sm md:text-base tracking-wide">
              {text}
            </p>
          )}

          {showDots && (
            <div className="flex gap-2 mt-3">
              <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-1"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-2"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-3"></span>
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
