import { useRef, useState } from "react";
import { useSkinstric } from "../context/SkinstricContext";
import { useNavigate } from "react-router-dom";
import resDiamondLg from "../assets/result/res-diamond-large.png";
import resDiamondMd from "../assets/result/res-diamond-medium.png";
import resDiamondSm from "../assets/result/res-diamond-small.png";
import cameraIcon from "../assets/result/camera-icon.png";
import cameraLine from "../assets/result/camera-line.png";
import galleryIcon from "../assets/result/gallery-icon.png";
import galleryLine from "../assets/result/gallery-line.png";
import BackButton from "../components/BackButton";

export default function ResultPage() {
  const fileInputRef = useRef(null);
  const { setPhaseTwoData } = useSkinstric();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [showPreparing, setShowPreparing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Gallery Upload Flow
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64 = reader.result;
      setPreview(base64);
      setShowPreparing(true);

      try {
        setLoading(true);

        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64 }),
          },
        );

        const data = await response.json();

        setPhaseTwoData(data);
        setShowPreparing(false);
        setShowSuccessPopup(true);

        navigate("/select");
      } catch (err) {
        console.error("Phase Two error:", err);
        alert("Something went wrong. Try again.");
        setShowPreparing(false);
      }

      setLoading(false);
    };

    reader.readAsDataURL(file);
  };

  // Camera Flow
  const handleCameraAllow = () => {
    setShowCameraModal(false);
    navigate("/camera");
  };
  const handleCameraDeny = () => {
    setShowCameraModal(false);
  };

  // Success Popup
  const handleSuccessOk = () => {
    setShowSuccessPopup(false);
    navigate("/select");
  };

  return (
    <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
      {/* Top Left Label */}
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>

      {/* Main Container */}
      <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30">
        {/* Camera Cluster */}
        <div
          className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-x-full flex flex-col items-center justify-center"
          onClick={() => setShowCameraModal(true)}
        >
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
          <img
            src={resDiamondLg}
            alt="Diamond Large"
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-[200deg]"
          />
          <img
            src={resDiamondMd}
            alt="DiamondMedium"
            className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] animate-spin-slower rotate-[190deg]"
          />
          <img
            src={resDiamondSm}
            alt="DiamondSmall"
            className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] animate-spin-slowest"
            style={{ color: "transparent" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src={cameraIcon}
              alt="Camera Icon"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-110 duration-700 ease-in-out cursor-pointer"
            />
            <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
              <p className="text-xs md:text-sm font-normal leading-[24px]">
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
              <img
                src={cameraLine}
                alt="Camera Line"
                className="absolute hidden md:block md:right-[143px] md:top-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Gallery Cluster */}
        <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center -translate-y-[10%] md:-translate-y-0">
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
          <img
            src={resDiamondLg}
            alt="Diamond Large"
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-[205deg]"
          />
          <img
            src={resDiamondMd}
            alt="DiamondMedium"
            className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] animate-spin-slower rotate-[195deg]"
          />
          <img
            src={resDiamondSm}
            alt="DiamondSmall"
            className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] animate-spin-slowest"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={galleryIcon}
              alt="Gallery Icon"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-110 duration-700 ease-in-out cursor-pointer"
            />
            <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
              <p className="text-[12px] md:text-[14px] font-normal leading-[24px] text-right">
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
              <img
                src={galleryLine}
                alt="Gallery Line"
                className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
              />
            </div>
          </div>
        </div>

        {/* Preview box */}
        <div className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8">
          <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileUpload}
        />
      </div>

      {loading && (
        <p className="absolute top-[50%] left-1/2 -translate-x-1/2 text-sm font-semibold">
          Processing…
        </p>
      )}

      {/* Navigation Bottom */}
      <div className="pt-4 pb-8 bg-white sticky md:static bottom-30.5">
        <div className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">
          {/* Back Button */}
          <BackButton href="/testing" label="BACK" />

          {/* Camera Modal */}
          {showCameraModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[2000]">
              <div className="bg-white w-[300px] p-6 rounded-md text-center shadow-lg">
                <p className="text-sm font-semibold mb-4">
                  ALLOW A.I. TO ACCESS YOUR CAMERA
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handleCameraDeny}
                    className="px-4 py-2 border border-black text-sm"
                  >
                    DENY
                  </button>
                  <button
                    onClick={handleCameraAllow}
                    className="px-4 py-2 bg-black text-white text-sm"
                  >
                    ALLOW
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Preparing Screen */}
          {showPreparing && (
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
          )}

          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[4000]">
              <div className="bg-white w-[300px] p-6 rounded-md text-center shadow-lg">
                <p className="text-sm font-semibold mb-4">
                  Image analyzed successfully!
                </p>
                <button
                  onClick={handleSuccessOk}
                  className="px-4 py-2 bg-black text-white text-sm"
                >
                  OK
                </button>
              </div>
            </div>
          )}

          {/* Proceed Button (hidden until image is uploaded) */}
          <a href="/select">
            <div className="hidden">
              <div>
                <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-[45deg] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    PROCEED
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    PROCEED
                  </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-[45deg] scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-current text-black absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
