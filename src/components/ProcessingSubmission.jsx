export default function ProcessingSubmission({ show }) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-[3000]">
      <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">
        
        {/* Dotted Squares */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 border border-gray-300 rotate-45 opacity-60"></div>
          <div className="absolute inset-0 border border-gray-300 rotate-[55deg] opacity-40"></div>
          <div className="absolute inset-0 border border-gray-300 rotate-[65deg] opacity-30"></div>
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[#1A1B1C] text-sm md:text-base mt-6 tracking-wide">
            Processing submission
          </p>

          {/* Bouncing Dots */}
          <div className="flex gap-2 mt-3">
            <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-1"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-2"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full bounce-delay-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
