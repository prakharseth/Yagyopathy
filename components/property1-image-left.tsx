import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1ImageLeftType = {
  imageMob02?: string;
  title?: string;
  shortTitle?: string;
  description?: string;

  /** Style props */
  property1ImageLeftWidth?: CSSProperties["width"];
  property1ImageLeftAlignSelf?: CSSProperties["alignSelf"];
  customImagesBorderRadius?: CSSProperties["borderRadius"];
  customImagesOverflow?: CSSProperties["overflow"];
  customImagesFlexShrink?: CSSProperties["flexShrink"];
  imageMob02IconBorderRadius?: CSSProperties["borderRadius"];
  imageMob02IconRight?: CSSProperties["right"];
  imageMob02IconLeft?: CSSProperties["left"];
};

const Property1ImageLeft: NextPage<Property1ImageLeftType> = ({
  imageMob02,
  title = "Healing for Common Conditions",
  shortTitle = "Common ailments treated with Yagyopathy",
  description = "Yagyopathy has been shown to effectively address a wide range of common ailments. Explore how Yagyopathy can be used as a complementary therapy for various health concerns.",
  property1ImageLeftWidth,
  property1ImageLeftAlignSelf,
  customImagesBorderRadius,
  customImagesOverflow,
  customImagesFlexShrink,
  imageMob02IconBorderRadius,
  imageMob02IconRight,
  imageMob02IconLeft,
}) => {
  const property1ImageLeftStyle: CSSProperties = useMemo(() => {
    return {
      width: property1ImageLeftWidth,
      alignSelf: property1ImageLeftAlignSelf,
    };
  }, [property1ImageLeftWidth, property1ImageLeftAlignSelf]);

  const customImagesStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: customImagesBorderRadius,
      overflow: customImagesOverflow,
      flexShrink: customImagesFlexShrink,
    };
  }, [customImagesBorderRadius, customImagesOverflow, customImagesFlexShrink]);

  const imageMob02IconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: imageMob02IconBorderRadius,
      right: imageMob02IconRight,
      left: imageMob02IconLeft,
    };
  }, [imageMob02IconBorderRadius, imageMob02IconRight, imageMob02IconLeft]);

  return (
    <div
      className="w-full flex flex-row items-center justify-between text-left text-17xl text-darkslategray-100 font-dm-sans"
      style={property1ImageLeftStyle}
    >
      <div
        className="relative rounded-3xs w-[463px] h-[378px] overflow-hidden shrink-0"
        style={customImagesStyle}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageMob02}
          style={imageMob02IconStyle}
        />
      </div>
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
    </div>
  );
};

export default Property1ImageLeft;
