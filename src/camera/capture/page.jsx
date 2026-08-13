import { useEffect, useRef } from "react";
import takePictureIcon from "../../assets/camera/take-picture-icon.png";

export default function CameraCapturePage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    // Later will be: send canvas.toDataURL() to backend for processing
    console.log("Photo captured!");
  };

  return (
    <div className="h-[90vh] w-screen">
      <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">

        {/* Video Feed */}
        <div className="absolute inset-0 z-10">
          <video
            ref={videoRef}
            autoplay=""
            playsinline=""
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
      </div>
    </div>
  );
}
