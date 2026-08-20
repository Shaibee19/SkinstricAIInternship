import rectLg from "../assets/camera/cam-diamond-large.png";
import rectMd from "../assets/camera/cam-diamond-medium.png";
import rectSm from "../assets/camera/cam-diamond-small.png";

export default function PreparingScreen({
  show,
  text = "PREPARING YOUR ANALYSIS…",
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[3000]">
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        <img
          src={rectLg}
          className="absolute inset-0 w-full h-full animate-spin-slow"
        />
        <img
          src={rectMd}
          className="absolute inset-0 w-full h-full animate-spin-slower"
        />
        <img
          src={rectSm}
          className="absolute inset-0 w-full h-full animate-spin-slowest"
        />
      </div>

      <p className="text-[#1A1B1C] text-sm md:text-base mt-6 tracking-wide">
        PREPARING YOUR ANALYSIS…
      </p>
    </div>
  );
}
