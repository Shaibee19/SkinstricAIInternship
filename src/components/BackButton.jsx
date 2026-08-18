export default function BackButton({ href = "/", label = "BACK" }) {
  return (
    <a href={href}>
      <div>
        {/* Mobile */}
        <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 sm:hidden">
          <span className="-rotate-45 text-xs font-semibold">{label}</span>
        </div>

        {/* Desktop */}
        <div className="group hidden sm:flex flex-row relative items-center">
          <div className="w-12 h-12 border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] duration-300"></div>

          <span className="absolute left-[15px] bottom-[13px] rotate-180 scale-[0.9] group-hover:scale-[0.92] duration-300">
            ▶
          </span>

          <span className="text-sm font-semibold ml-6">{label}</span>
        </div>
      </div>
    </a>
  );
}