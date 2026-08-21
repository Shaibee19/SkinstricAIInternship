export default function GreatShot({ show, onRetake, onUse, isUploading }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-[3000]">

      <div className="absolute top-40 text-sm leading-6 uppercase text-[#FCFCFC]">
        GREAT SHOT!
      </div>

      {/* Preview + Buttons */}
      <div className="absolute bottom-40 sm:bottom-16 left-0 right-0 flex flex-col items-center z-20">
        <h2 className="text-lg font-semibold mb-5 md:mb-7 text-[#FCFCFC] drop-shadow-md">
          Preview
        </h2>

        <div className="flex justify-center space-x-6">

          <button
            className="px-4 py-1 bg-gray-200 text-gray-800 cursor-pointer hover:bg-gray-300 shadow-md text-sm"
            onClick={onRetake}
          >
            Retake
          </button>

          <button
            onClick={onUse}
            disabled={isUploading}
            className={`px-6 py-2 shadow-md text-sm transition-all duration-300
              ${isUploading 
                ? "bg-gray-400 text-white cursor-not-allowed" 
                : "bg-black text-white hover:bg-gray-800"
              }
            `}
          >
            {isUploading ? "Uploading…" : "Use This Photo"}
          </button>

        </div>
      </div>
    </div>
  );
}

