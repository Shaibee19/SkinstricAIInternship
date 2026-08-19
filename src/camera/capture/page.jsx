import { useEffect, useRef, useState } from "react";
import { useSkinstric } from "../../context/SkinstricContext";
import { useNavigate } from "react-router-dom";
import takePictureIcon from "../../assets/camera/take-picture-icon.png";
import BackButton from "../../components/BackButton";
import rectLg from "../../assets/camera/cam-diamond-large.png";
import rectMd from "../../assets/camera/cam-diamond-medium.png";
import rectSm from "../../assets/camera/cam-diamond-small.png";

export default function CameraCapturePage() {
  const { setPhaseTwoData } = useSkinstric();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showPreparing, setShowPreparing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Start the camera feed
  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access error:", err);
      }
    }
    startCamera();
  }, []);

  // Capture photo from the video feed
  const capturePhoto = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame onto canvas
    ctx.drawImage(video, 0, 0);

    // Convert to base64
    const base64 = canvas.toDataURL("image/jpeg");

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

      // Save globally
      setPhaseTwoData(data);
      setShowPreparing(false);
      setShowSuccessPopup(true);
    } catch (err) {
      console.error("Phase Two error:", err);
      alert("Something went wrong. Try again.");
      setShowPreparing(false);
    }

    setLoading(false);
  };

  const handleSuccessOk = () => {
    setShowSuccessPopup(false);
    // Navigate to select page
    navigate("/select");
  };

  return (
    <div className="h-[90vh] w-screen">
      <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
        {/* Video Feed */}
        <div className="absolute inset-0 z-10">
          <video
            ref={videoRef}
            autoplay
            playsinline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Take Picture Button */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex items-center space-x-3">
            <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
              TAKE PICTURE
            </div>
            <div
              className="transform hover:scale-105 ease-in-out duration-300 cursor-pointer"
              onClick={capturePhoto}
            >
              <img
                src={takePictureIcon}
                alt="Take Picture"
                className="w-16 h-16"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
            <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>
            <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
              <p>◇ NEUTRAL EXPRESSION</p>
              <p>◇ FRONTAL POSE</p>
              <p>◇ ADEQUATE LIGHTING</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
          <BackButton href="/result" label="BACK" />
        </div>

        {/* Canvas for photo capture */}
        <canvas ref={canvasRef} className="hidden"></canvas>
        {loading && (
          <p className="absolute top-[55%] right-8 text-white text-sm font-semibold">
            Processing…
          </p>
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
      </div>
    </div>
  );
}
