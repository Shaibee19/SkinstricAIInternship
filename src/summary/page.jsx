import { useMemo, useState } from "react";
import { useSkinstric } from "../context/SkinstricContext";
import radioButtonActive from "../assets/summary/radio-button-active.png";
import radioButton from "../assets/summary/radio-button.png";
import BackButton from "../components/buttons/BackButton";
import HomeButton from "../components/buttons/HomeButton";

export default function SummaryPage() {
  const { phaseTwoData } = useSkinstric();

  const parsed = useMemo(() => {
    const safe = phaseTwoData?.data || {};
    const race = safe.race || {};
    const age = safe.age || {};
    const gender = safe.gender || {};

    const toArray = (obj) =>
      Object.entries(obj).map(([label, value]) => ({
        label,
        confidence: Math.round((value || 0) * 100),
      }));

    const sortDesc = (arr) => arr.sort((a, b) => b.confidence - a.confidence);

    return {
      raceData: sortDesc(toArray(race)),
      ageData: sortDesc(toArray(age)),
      sexData: sortDesc(toArray(gender)),
    };
  }, [phaseTwoData]);

  const { raceData, ageData, sexData } = parsed;
  const initialRace = raceData[0];
  const initialAge = ageData[0];
  const initialSex = sexData[0];

  const [selectedCategory, setSelectedCategory] = useState("race");
  const [selectedValue, setSelectedValue] = useState(initialRace?.label);
  const [selectedConfidence, setSelectedConfidence] = useState(
    initialRace?.confidence,
  );

  const getCurrentList = () => {
    if (selectedCategory === "race") return raceData || [];
    if (selectedCategory === "age") return ageData || [];
    if (selectedCategory === "sex") return sexData || [];
    return [];
  };

  const currentList = getCurrentList();

  const getSubtitle = () => {
    if (selectedCategory === "race") return "PREDICTED RACE";
    if (selectedCategory === "age") return "PREDICTED AGE RANGE";
    if (selectedCategory === "sex") return "PREDICTED SEX";
    return "PREDICTED INFORMATION";
  };

  const circumference = 308.819;
  const dashOffset =
    circumference - (circumference * (selectedConfidence || 0)) / 100;

  const handleLeftSelect = (category) => {
    setSelectedCategory(category);

    const list =
      category === "race" ? raceData : category === "age" ? ageData : sexData;

    // Default to highest confidence item
    setSelectedValue(list[0].label);
    setSelectedConfidence(list[0].confidence);
  };

  const formatLabel = (label) => {
    if (!label) return "";
    return label
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  return (
    <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="md:h-full max-w-full mx-5 px-4 md:px-0 flex flex-col">
          {/* Header */}
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
            <h2 className="text-base font-semibold leading-[24px]">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
              DEMOGRAPHICS
            </h3>
            <h4 className="text-sm mt-2 leading-[24px]">{getSubtitle()}</h4>
          </div>

          {/* Summary Grid */}
          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4">
            {/* Left Column */}
            <div className="space-y-3 md:flex md:flex-col h-[62%]">
              {/* RACE */}
              <div
                className={`
                  p-3 cursor-pointer flex-1 flex flex-col justify-between border-t
                  ${
                    selectedCategory === "race"
                      ? "bg-[#1A1B1C] text-white"
                      : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                  }
                `}
                onClick={() => handleLeftSelect("race")}
              >
                <p className="text-base font-semibold">
                  {formatLabel(
                    selectedCategory === "race"
                      ? selectedValue
                      : raceData[0]?.label,
                  )}
                </p>
                <h4 className="text-base font-semibold mb-1">RACE</h4>
              </div>

              {/* AGE */}
              <div
                className={`
                  p-3 cursor-pointer flex-1 flex flex-col justify-between border-t
                  ${
                    selectedCategory === "age"
                      ? "bg-[#1A1B1C] text-white"
                      : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                  }
                `}
                onClick={() => handleLeftSelect("age")}
              >
                <p className="text-base font-semibold">
                  {selectedCategory === "age"
                    ? selectedValue
                    : ageData[0]?.label}
                </p>
                <h4 className="text-base font-semibold mb-1">AGE</h4>
              </div>

              {/* SEX */}
              <div
                className={`
                  p-3 cursor-pointer flex-1 flex flex-col justify-between border-t
                  ${
                    selectedCategory === "sex"
                      ? "bg-[#1A1B1C] text-white"
                      : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                  }
                `}
                onClick={() => handleLeftSelect("sex")}
              >
                <p className="text-base font-semibold">
                  {formatLabel(
                    selectedCategory === "sex"
                      ? selectedValue
                      : sexData[0]?.label,
                  )}
                </p>
                <h4 className="text-base font-semibold mb-1">SEX</h4>
              </div>
            </div>

            {/* Middle Column */}
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
              {/* Selected Label */}
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                {formatLabel(selectedValue)}
              </p>

              {/* Progress Circle */}
              <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                <div className="relative w-full h-full max-h-[384px]">
                  {/* FULL GRAY CIRCLE */}
                  <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <path
                      d="
      M 50,50
      m 0,-49.15
      a 49.15,49.15 0 1 1 0,98.3
      a 49.15,49.15 0 1 1 0,-98.3
    "
                      stroke="#E5E7EB" // lighter gray
                      strokeWidth="4" // thicker ring
                      fill="none"
                      style={{
                        strokeDasharray: `${circumference}px ${circumference}px`,
                        strokeDashoffset: 0,
                      }}
                    />
                  </svg>

                  {/* BLACK ANIMATED ARC */}
                  <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <path
                      d="
      M 50,50
      m 0,-49.15
      a 49.15,49.15 0 1 1 0,98.3
      a 49.15,49.15 0 1 1 0,-98.3
    "
                      stroke="#1A1B1C"
                      strokeWidth="4"
                      fill="none"
                      style={{
                        transition: "stroke-dashoffset 0.8s ease",
                        strokeDasharray: `${circumference}px ${circumference}px`,
                        strokeDashoffset: dashOffset,
                      }}
                    />
                  </svg>

                  {/* Percentage Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl md:text-[40px] font-normal relative">
                      {selectedConfidence || 0}
                      <span className="absolute text-xl md:text-3xl">%</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                {/* Right Column Header */}
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    {selectedCategory.toUpperCase()}
                  </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>

                {/* Right Column List */}
                <div className="space-y-3 md:flex md:flex-col h-[62%]">
                  {currentList.map((item) => {
                    const isActive = item.label === selectedValue;

                    return (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between h-[48px] px-4 cursor-pointer ${
                          isActive
                            ? "bg-[#1A1B1C] text-white"
                            : "bg-white hover:bg-[#E1E1E2]"
                        }`}
                        onClick={() => {
                          setSelectedValue(item.label);
                          setSelectedConfidence(item.confidence);
                        }}
                      >
                        <div className="flex items-center gap-1">
                          <img
                            src={isActive ? radioButtonActive : radioButton}
                            alt="radio button"
                            className="w-[12px] h-[12px] mr-2"
                          />
                          <span className="font-normal text-base leading-6 tracking-tight">
                            {formatLabel(item.label)}
                          </span>
                        </div>

                        <span className="font-normal text-base leading-6 tracking-tight">
                          {item.confidence}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-4 md:pt-[37px] pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
              <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
                {/* Back Button */}
                <BackButton href="/select" label="BACK" />

                {/* Home Button */}
                <HomeButton href="/" label="HOME" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
