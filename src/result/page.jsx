import resDiamondLg from "../assets/result/res-diamond-large.png";
import resDiamondMd from "../assets/result/res-diamond-medium.png";
import resDiamondSm from "../assets/result/res-diamond-small.png";
import cameraIcon from "../assets/result/camera-icon.png";
import cameraLine from "../assets/result/camera-line.png";
import galleryIcon from "../assets/result/gallery-icon.png";
import galleryLine from "../assets/result/gallery-line.png";

export default function ResultPage() {
  return (
    <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-[64px] justify-center">
      {/* Top Left Label */}
      <div className="absolute top-2 left-9 md:left-8 text-left">
        <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
      </div>

      {/* Main Container */}
      <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30">

        {/* Camera Cluster */}
        <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-x-full flex flex-col items-center justify-center">
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
          <img
            src={resDiamondLg}
            alt="Diamond Large"
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-[200deg]"
          />
          <img
            src={resDiamondMd}
            alt="DiamondMedium"
            className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] animate-spin-slower rotate-[190deg]"
          />
          <img
            src={resDiamondSm}
            alt="DiamondSmall"
            className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] animate-spin-slowest"
            style="color: transparent;"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src={cameraIcon}
              alt="Camera Icon"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-110 duration-700 ease-in-out cursor-pointer"
            />
            <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
              <p className="text-xs md:text-sm font-normal leading-[24px]">
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
              <img
                src={cameraLine}
                alt="Camera Line"
                className="absolute hidden md:block md:right-[143px] md:top-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Gallery Cluster */}
        <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center -translate-y-[10%] md:-translate-y-0">
          <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
          <img
            src={resDiamondLg}
            alt="Diamond Large"
            className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-[205deg]"
          />
          <img
            src={resDiamondMd}
            alt="DiamondMedium"
            className="absolute w-[230px] h-[230px] md:w-[444px] md:h-[444px] animate-spin-slower rotate-[195deg]"
          />
          <img
            src={resDiamondSm}
            alt="DiamondSmall"
            className="absolute w-[190px] h-[190px] md:w-[405px] md:h-[405px] animate-spin-slowest"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src={galleryIcon}
              alt="Gallery Icon"
              className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-110 duration-700 ease-in-out cursor-pointer"
            />
            <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
              <p className="text-[12px] md:text-[14px] font-normal leading-[24px] text-right">
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
              <img
                src={galleryLine}
                alt="Gallery Line"
                className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
              />
            </div>
          </div>
        </div>

        {/* Preview box */}
        <div className="absolute top-[-75px] right-7 md:top-[-50px] md:right-8">
          <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
          <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden"></div>
        </div>

        <input className="hidden" accept="image/*" type="file" />
      </div>

      {/* Navigation Bottom */}
      <div className="pt-4 pb-8 bg-white sticky md:static bottom-30.5">
        <div className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">

          {/* Back Button */}
          <BackButton href="/testing" label="BACK" />

          {/* Proceed Button (hidden until image is uploaded) */}
          <a href="/select">
            <div className="hidden">
              <div>
                <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    PROCEED
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    PROCEED
                  </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
