import type { NextPage } from "next";

type Property1ImgRightType = {
  shortTitle?: string;
  title?: string;
  descTitle?: string;
  desc?: string;
  imageMob02?: string;
};

const Property1ImgRight: NextPage<Property1ImgRightType> = ({
  shortTitle = "About Yagyopathy",
  title = "Discover the Roots and Philosophy of Yagyopathy",
  descTitle = "A Spiritual Path to Holistic Well-being",
  desc = "Delve into the rich history of Yagyopathy, tracing its origins back to the ancient Vedic traditions. Explore the profound philosophy that underlies this practice, blending spiritual beliefs and modern scientific principles seamlessly.",
  imageMob02,
}) => {
  return (
    <div className="flex flex-row items-start justify-between text-left text-xl text-blue font-inter self-stretch">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-5 px-10 gap-[20px]">
        <div className="rounded bg-gray-100 flex flex-row items-start justify-start py-1 px-2 border-[1px] border-solid border-gray-300">
          <div className="relative font-medium">{shortTitle}</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-17xl text-darkslategray-100 font-dm-sans">
          <div className="self-stretch relative font-medium">{title}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-5xl font-inter">
            <div className="self-stretch relative font-medium">{descTitle}</div>
            <div className="self-stretch relative text-lg">{desc}</div>
          </div>
        </div>
      </div>
      <div className="relative w-[463px] h-[377px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageMob02}
        />
      </div>
    </div>
  );
};

export default Property1ImgRight;
