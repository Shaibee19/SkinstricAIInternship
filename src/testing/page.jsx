import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkinstric } from "../context/SkinstricContext";
import BackButton from "../components/buttons/BackButton";
import RotatingDiamonds from "../components/overlays/RotatingDiamonds";
import ThankYou from "../components/overlays/ThankYou";

export default function TestingPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [readyToProceed, setReadyToProceed] = useState(false);

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
      setShowProcessing(true);

      // Start API call immediately
      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, location: city }),
          }
        );

        const data = await response.json();

        // Save API result globally
        setPhaseOneData(data);
        // API is done — user can proceed
        setReadyToProceed(true);
      
      } catch (err) {
        console.error("Phase One API error:", err);
        alert("Something went wrong. Try again.");
      }

      // Show Processing → then Thank You
      setTimeout(() => {
        setShowProcessing(false);
        setShowThankYou(true);
      }, 1500);
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-white text-center relative">

      {/* Main centered content */}
      <div className="flex flex-col items-center justify-center h-full">

      {/* Top-left label */}
        <div className="absolute top-16 left-9 text-left z-[200]">
          <p className="font-semibold text-xs">
            {step === 1 ? "TO START ANALYSIS" : "YOUR CITY NAME"}
          </p>
        </div>

        {/* Input Section */}
        <div className="relative flex flex-col items-center justify-center w-full h-full">

          {/* Background Diamonds */}
          <RotatingDiamonds show={true} overlay={false} />

          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1 z-[200]">
            CLICK TO TYPE
          </p>

          <form className="relative z-[200]" onSubmit={handleSubmit}>
            <input
              value={step === 1 ? name : city}
              onChange={(e) =>
                step === 1 ? setName(e.target.value) : setCity(e.target.value)
              }
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black 
                         focus:outline-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] 
                         text-[#1A1B1C]"
              placeholder={step === 1 ? "Introduce Yourself" : "Your City Name"}
              autoComplete="off"
              type="text"
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
        </div>

        {/* Back Button */}
        {!showThankYou && (
          <div className="absolute bottom-[38.5px] md:bottom-8 w-full flex justify-between md:px-9 px-13 z-[200]">
            <BackButton href="/" label="BACK" />
          </div>
        )}
      </div>

      {/* Overlays */}
      {loading && (
        <>
          <RotatingDiamonds
            show={showProcessing}
            overlay={true}
            size="large"
            text="Processing submission"
            showDots={true}
          />

          <ThankYou
            show={showThankYou}
            onProceed={() => {
              if (readyToProceed) {
                setLoading(false);
                navigate("/result");
              }
            }}
          />
        </>
      )}
    </div>
  );
}
