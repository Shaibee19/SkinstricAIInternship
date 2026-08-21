export default function CameraModal({ show, onAllow, onDeny }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[5000] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[300px] p-6 rounded-md text-center shadow-lg">
        <p className="text-sm font-semibold mb-4 text-[#1A1B1C]">
          ALLOW A.I. TO ACCESS YOUR CAMERA
        </p>

        <div className="flex justify-between mt-4">
          <button
            onClick={onDeny}
            className="px-4 py-2 border border-black text-sm hover:bg-gray-100 transition-all"
          >
            DENY
          </button>

          <button
            onClick={onAllow}
            className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-all"
          >
            ALLOW
          </button>
        </div>
      </div>
    </div>
  );
}

