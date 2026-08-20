import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkinstric } from "../context/SkinstricContext";
import BackButton from "../components/BackButton";
import diamondLarge from "../assets/diamonds/diamond-large.png";
import diamondMedium from "../assets/diamonds/diamond-medium.png";
import diamondSmall from "../assets/diamonds/diamond-small.png";
import ProceedButton from "../components/ProceedButton";

export default function TestingPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setPhaseOneData } = useSkinstric();

  async function handleSubmit(e) {
    e.preventDefault();

    if (step === 1) {
      if (!name.trim()) return;
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!city.trim()) return;

      setLoading(true);

      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: `${name}, ${city}` }),
          },
        );

        const data = await response.json();

        // Save API result globally
        setPhaseOneData(data);

        // Navigate to result page
        navigate("/result");
      } catch (err) {
        console.error("Phase One API error:", err);
        alert("Something went wrong. Try again.");
      }

      setLoading(false);
    }
  }

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center relative">
      {/* Top-left label */}
      <div className="absolute top-16 left-9 text-left">
        <p className="font-semibold text-xs">
          {step === 1 ? "TO START ANALYSIS" : "YOUR CITY NAME"}
        </p>
      </div>

      {/* Input Section */}
      <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
        <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
          CLICK TO TYPE
        </p>

        <form className="relative z-10" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center"></div>
          <input
            value={step === 1 ? name : city}
            onChange={(e) =>
              step === 1 ? setName(e.target.value) : setCity(e.target.value)
            }
            className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
            placeholder={step === 1 ? "Introduce Yourself" : "Your City Name"}
            autoComplete="off"
            type="text"
          />
          <button type="submit" className="sr-only" fdprocessedid="8h0c4xp">
            Submit
          </button>
        </form>

        {/* Rotating Diamond Images */}
        <img
          src={diamondLarge}
          alt="Diamond Large"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
        />
        <img
          src={diamondMedium}
          alt="Diamond Medium"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185"
        />
        <img
          src={diamondSmall}
          alt="Diamond Small"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest"
        />
      </div>

      {/* Back Button */}
      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
        <BackButton href="/" label="BACK" />
      </div>

      {loading && (
        <p className="absolute top-[55%] right-8 text-black text-sm font-semibold">
          Processing…
        </p>
      )}

      {/* Proceed Button (hidden until both name and city are entered) */}
      <ProceedButton />
    </div>
  );
}
