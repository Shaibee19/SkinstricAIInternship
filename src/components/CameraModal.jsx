export default function CameraModal({ show, onAllow, onDeny }) {

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[2000]">
      <div className="bg-white w-[300px] p-6 rounded-md text-center shadow-lg">
        <p className="text-sm font-semibold mb-4">
          ALLOW A.I. TO ACCESS YOUR CAMERA
        </p>

        <div className="flex justify-between mt-4">
          <button
            onClick={onDeny}
            className="px-4 py-2 border border-black text-sm"
          >
            DENY
          </button>

          <button
            onClick={onAllow}
            className="px-4 py-2 bg-black text-white text-sm"
          >
            ALLOW
          </button>
        </div>
      </div>
    </div>
  );
}
