export default function HomeButton({
  href = "/",
  label1 = "SUM",
  label2 = "GET SUMMARY",
}) {
  return (
    <a href={href}>
      <div>
        {/* Mobile */}
        <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
          <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
            {label1}
          </span>
        </div>

        {/* Desktop */}
        <div className="group hidden sm:flex flex-row relative justify-center items-center">
          <span className="text-sm font-semibold hidden sm:block mr-5">
            {label2}
          </span>
          <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-current text-black absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300"
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}
