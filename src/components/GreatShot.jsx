export default function GreatShot({ show, onRetake, onUse, isUploading }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-[3000]">
      <div className="absolute text-sm leading-6 uppercase text-[#FCFCFC] top-40">
        GREAT SHOT!
      </div>

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
            className={`px-6 py-2 bg-[#1A1B1C] text-[#FCFCFC] cursor-pointer hover:bg-gray-800 shadow-md text-sm" ${
              isUploading ? "bg-gray-400 text-white" : "bg-white text-black"
            }`}
            onClick={onUse}
            disabled={isUploading}
          >
            {isUploading ? "Uploading…" : "Use This Photo"}
          </button>
        </div>
      </div>
    </div>
  );
}
