import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1ImageRightType = {
  title?: string;
  shortTitle?: string;
  description?: string;
  imageMob02?: string;

  /** Style props */
  property1ImageRightWidth?: CSSProperties["width"];
  property1ImageRightAlignSelf?: CSSProperties["alignSelf"];
};

const Property1ImageRight: NextPage<Property1ImageRightType> = ({
  title = "Healing for Common Conditions",
  shortTitle = "Common ailments treated with Yagyopathy",
  description = "Yagyopathy has been shown to effectively address a wide range of common ailments. Explore how Yagyopathy can be used as a complementary therapy for various health concerns.",
  imageMob02,
  property1ImageRightWidth,
  property1ImageRightAlignSelf,
}) => {
  const property1ImageRightStyle: CSSProperties = useMemo(() => {
    return {
      width: property1ImageRightWidth,
      alignSelf: property1ImageRightAlignSelf,
    };
  }, [property1ImageRightWidth, property1ImageRightAlignSelf]);

  return (
    <div
      className="w-full flex flex-row items-center justify-between text-left text-17xl text-darkslategray-100 font-dm-sans"
      style={property1ImageRightStyle}
    >
      <div className="flex flex-col items-start justify-start py-5 px-0">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="relative font-medium inline-block w-[470px]">
            {title}
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px] text-xl text-blue font-inter">
            <div className="relative font-medium inline-block w-[470px]">
              {shortTitle}
            </div>
            <div className="relative text-base text-darkslategray-100 inline-block w-[470px]">
              {description}
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-3xs w-[463px] h-[378px] overflow-hidden shrink-0">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageMob02}
        />
      </div>
    </div>
  );
};

export default Property1ImageRight;
