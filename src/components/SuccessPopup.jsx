export default function SuccessPopup({
  show,
  message = "Image analyzed successfully!",
  onConfirm,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[4000]">
      <div className="bg-white w-[300px] p-6 rounded-md text-center shadow-lg">
        <p className="text-sm font-semibold mb-4">
          {message}
        </p>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-black text-white text-sm"
        >
          OK
        </button>
      </div>
    </div>
  );
}
