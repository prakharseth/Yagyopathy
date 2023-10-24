import type { NextPage } from "next";

const ContainerHeroForm: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between text-left text-29xl text-darkslategray-100 font-dm-sans">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[40px]">
        <div className="relative leading-[58px] font-medium inline-block w-[500px]">
          Welcome to Yagyopathy: Bridging Spirituality and Science
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-5xl font-inter">
          <div className="self-stretch relative font-medium">
            Unlocking Ancient Wisdom for Modern Well-being
          </div>
          <div className="self-stretch relative text-xl">
            Step into the world of Yagyopathy, where timeless wisdom and
            cutting-edge science converge to guide you on a transformative
            journey towards self-discovery, balance, and harmony.
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 relative">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/imagemob011@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerHeroForm;
