export default function AnalyzingImage({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[3500] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white/40 w-[300px] h-[100px] p-6 rounded-md text-center shadow-lg animate-fade-in">
        <p className="text-sm font-semibold mb-4 text-[#1A1B1C]">
          ANALYZING IMAGE…
        </p>

        <div className="flex justify-center mt-2">
          <div className="w-2 h-2 bg-[#1A1B1C] rounded-full bounce-delay-1"></div>
          <div className="w-2 h-2 bg-[#1A1B1C] rounded-full bounce-delay-2 ml-2"></div>
          <div className="w-2 h-2 bg-[#1A1B1C] rounded-full bounce-delay-3 ml-2"></div>
        </div>
      </div>
    </div>
  );
}
