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
                    video: { facingMode: "user" }
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
<div class="h-[90vh] w-screen">
    <div class="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
        <div class="absolute inset-0 z-10">
            <video autoplay="" playsinline="" class="absolute inset-0 w-full h-full object-cover"></video>
            <div class="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
                <div class="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">TAKE PICTURE</div>
                <div class="transform hover:scale-105 ease-in-out duration-300">
                    <img alt="Take Picture" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="w-16 h-16 cursor-pointer" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtakePictureIcon.8b2eeaf2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtakePictureIcon.8b2eeaf2.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtakePictureIcon.8b2eeaf2.png&amp;w=128&amp;q=75" style="color: transparent;" />
                </div>
            </div>
            <div class="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
                <p class="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
                <div class="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                    <p>◇ NEUTRAL EXPRESSION</p>
                    <p>◇ FRONTAL POSE</p>
                    <p>◇ ADEQUATE LIGHTING</p>
                </div>
            </div>
        </div>
        <div class="absolute md:bottom-8 bottom-60 left-8 z-20">
            <a href="/result">
                <div>
                    <div class="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                        <span class="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">BACK</span>
                    </div>
                    <div class="group hidden sm:flex flex-row relative justify-center items-center">
                        <div class=" w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                        <span class="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">▶</span>
                        <span class="text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]">BACK</span>
                    </div>
                </div>
            </a>
        </div>
        <canvas class="hidden"></canvas>
    </div>
</div>
)
}