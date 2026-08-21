import { useEffect, useRef, useState } from "react";
import { useSkinstric } from "../../context/SkinstricContext";
import { useNavigate } from "react-router-dom";
import takePictureIcon from "../../assets/camera/take-picture-icon.png";
import BackButton from "../../components/buttons/BackButton";
import GreatShot from "../../components/overlays/GreatShot";
import AnalyzingImage from "../../components/overlays/AnalyzingImage";
import SuccessPopup from "../../components/overlays/SuccessPopup";

export default function CameraCapturePage() {
  const { setPhaseTwoData } = useSkinstric();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showAnalyzing, setShowAnalyzing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const startCamera = async () => {
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
  };

  // Start the camera feed
  useEffect(() => {
    startCamera();
  }, []);

  // Capture photo from the video feed
  const capturePhoto = () => {
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

    setCapturedImage(base64);
    setShowPreview(true);
  };

  // Retake Photo
  const handleRetake = () => {
    setShowPreview(false);
    setCapturedImage(null);
    startCamera();
  };

  // Success Popup
  const handleSuccessOk = () => {
    setShowSuccessPopup(false);
    navigate("/select");
  };

  // Use Photo
  const handleUsePhoto = async () => {
    setIsUploading(true);
    setShowAnalyzing(true);

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: capturedImage }),
        },
      );

      const data = await response.json();

      // Save globally
      setPhaseTwoData(data);
    } catch (err) {
      console.error("Phase Two error:", err);
      alert("Something went wrong. Try again.");
    }

    // Keep analyzing overlay visible long enough
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsUploading(false);
    setShowAnalyzing(false);
    setShowSuccessPopup(true);
  };

  return (
    <div className="h-[90vh] w-screen">
      <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
        {/* Video Feed */}
        <div className="absolute inset-0 z-10">
          {!showPreview && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Take Picture Button */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex items-center space-x-3">
            <div className="font-semibold text-sm tracking-tight text-[#FCFCFC] hidden sm:block">
              TAKE PICTURE
            </div>

            <div
              className="transform hover:scale-105 duration-300 cursor-pointer"
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
            <p className="text-sm mb-2 font-normal text-[#FCFCFC]">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>

            <div className="flex justify-center space-x-8 text-xs text-[#FCFCFC]">
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
        <canvas ref={canvasRef} className="hidden" />

        {/* Preview Image */}
        {showPreview && capturedImage && (
          <img
            src={capturedImage}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Processing Text */}
        {loading && (
          <p className="absolute top-[55%] right-8 text-white text-sm font-semibold">
            Processing…
          </p>
        )}

        {/* Overlays */}
        <GreatShot
          show={showPreview}
          onRetake={handleRetake}
          onUse={handleUsePhoto}
          isUploading={isUploading}
        />

        <AnalyzingImage show={showAnalyzing} />

        {/* Success Popup */}
        {showSuccessPopup && (
          <SuccessPopup show={showSuccessPopup} onConfirm={handleSuccessOk} />
        )}
      </div>
    </div>
  );
}
