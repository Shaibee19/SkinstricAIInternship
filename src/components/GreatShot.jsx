export default function GreatShot({ show, onRetake, onUse, isUploading }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-[3000]">

      <p className="text-white text-2xl font-semibold mb-4">Great shot!</p>

      <p className="text-white text-sm tracking-wide mb-6">Preview</p>

      <div className="flex gap-6">
        <button
          onClick={onRetake}
          className="px-4 py-2 border border-white text-white text-sm"
        >
          Retake
        </button>

        <button
          onClick={onUse}
          disabled={isUploading}
          className={`px-4 py-2 text-sm ${
            isUploading
              ? "bg-gray-400 text-white"
              : "bg-white text-black"
          }`}
        >
          {isUploading ? "Uploading…" : "Use This Photo"}
        </button>
      </div>
    </div>
  );
}
