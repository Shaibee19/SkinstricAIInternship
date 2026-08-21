import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rectLg from "../assets/camera/cam-diamond-large.png";
import rectMd from "../assets/camera/cam-diamond-medium.png";
import rectSm from "../assets/camera/cam-diamond-small.png";

import cameraIcon from "../assets/result/camera-icon.png";

export default function CameraSetupPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/camera/capture");
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      {/* Rotating Diamonds */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        <img
          src={rectLg}
          alt=""
          className="absolute inset-0 w-full h-full animate-spin-slow"
        />
        <img
          src={rectMd}
          alt=""
          className="absolute inset-0 w-full h-full animate-spin-slower"
        />
        <img
          src={rectSm}
          alt=""
          className="absolute inset-0 w-full h-full animate-spin-slowest"
        />
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          src={cameraIcon}
          alt="Camera Icon"
          className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-110 duration-700 ease-in-out"
        />

        <p className="text-[#1A1B1C] text-sm md:text-base mt-48 tracking-wide">
          SETTING UP CAMERA…
        </p>
      </div>
    </div>
  );
}
