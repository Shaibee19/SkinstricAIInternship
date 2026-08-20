export default function AnalyzingImage({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[4000]">
      <p className="text-[#1A1B1C] text-lg font-semibold mb-4">
        Analyzing image…
      </p>

      <div className="flex gap-2 mt-3">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
}
