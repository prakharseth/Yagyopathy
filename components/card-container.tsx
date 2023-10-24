import type { NextPage } from "next";
import Property1ImgLeft from "./property1-img-left";
import Property1ImgRight from "./property1-img-right";

const CardContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[80px]">
      <Property1ImgLeft
        imageMob02="/imagemob022@2x.png"
        shortTitle="About Yagyopathy"
        title="Discover the Roots and Philosophy of Yagyopathy"
        descTitle="A Spiritual Path to Holistic Well-being"
        desc="Delve into the rich history of Yagyopathy, tracing its origins back to the ancient Vedic traditions. Explore the profound philosophy that underlies this practice, blending spiritual beliefs and modern scientific principles seamlessly."
      />
      <Property1ImgRight
        shortTitle="Yagyopathy Therapies"
        title="Healing and Transformation through Yagyopathy"
        descTitle="Customized Therapies for Well-being"
        desc="Experience the power of Yagyopathy in addressing a wide range of common ailments, and discover specialized Yagyopathy treatments for specific conditions such as epilepsy, cancer support, and air purification."
        imageMob02="/imagemob023@2x.png"
      />
      <Property1ImgLeft
        imageMob02="/imagemob031@2x.png"
        shortTitle="Yagyopathy Training and Resources"
        title="Your Path to Mastery and Knowledge"
        descTitle="Unlock the Secrets of Yagyopathy"
        desc="Embark on your Yagyopathy journey with confidence. Choose from a range of learning options, including workshops, online courses, and the wealth of resources available at the Yagyavalkya Center for Yagya Research."
      />
    </div>
  );
};

export default CardContainer;
