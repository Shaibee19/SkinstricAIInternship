export default function HomeButton({ href = "/", label = "HOME" }) {
  return (
    <a href={href}>
      <div>
        {/* Mobile */}
        <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
          <span className="-rotate-45 text-xs font-semibold sm:hidden">
            {label}
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex flex-row relative justify-center items-center">
          <span className="text-sm font-semibold mr-5">{label}</span>
          <div className="w-12 h-12 border border-[#1A1B1C] rotate-45 scale-[0.85]"></div>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-current text-black absolute right-[15px] bottom-[13px] scale-[0.9]"
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}
