export default function SuccessPopup({ show, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[4000] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[300px] p-6 rounded-md text-center shadow-lg">
        <p className="text-sm font-semibold mb-4 text-[#1A1B1C]">
          Image analyzed successfully!
        </p>

        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-all"
        >
          OK
        </button>
      </div>
    </div>
  );
}

