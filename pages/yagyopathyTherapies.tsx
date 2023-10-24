import type { NextPage } from "next";
import Header from "../components/header";
import ContactUs from "../components/contact-us";
import Logo from "../components/logo";
import Property1ImageLeft from "../components/property1-image-left";
import Property1ImageRight from "../components/property1-image-right";
import Footerdesk from "../components/footerdesk";

const Screen3: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start gap-[10px] text-center text-17xl text-darkslategray-100 font-dm-sans">
      <Header />
      <div className="self-stretch bg-white hidden flex-col items-center justify-start pt-5 px-4 pb-0 gap-[40px] lg:hidden md:flex sm:flex">
        <div className="self-stretch flex flex-col items-center justify-start gap-[80px]">
          <div className="self-stretch flex flex-col items-center justify-start text-29xl">
            <div className="relative leading-[58px] font-medium inline-block w-[324px]">
              Yagyopathy Therapies
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="relative w-[354px] h-[289px]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/imagemob021@2x.png"
              />
            </div>
            <div className="self-stretch bg-white flex flex-col items-center justify-center py-5 px-0">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative font-medium">
                  Healing for Common Conditions
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-xl text-blue font-inter">
                  <div className="self-stretch relative font-medium">
                    Common ailments treated with Yagyopathy
                  </div>
                  <div className="self-stretch relative text-base text-darkslategray-100">
                    Yagyopathy has been shown to effectively address a wide
                    range of common ailments. Explore how Yagyopathy can be used
                    as a complementary therapy for various health concerns.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="relative rounded-3xs w-[354px] h-[289px] overflow-hidden shrink-0">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/imagemob05@2x.png"
              />
            </div>
            <div className="self-stretch bg-white flex flex-col items-center justify-center py-5 px-0">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative font-medium">
                  Tailored Therapies
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-xl text-blue font-inter">
                  <div className="self-stretch relative font-medium">
                    Yagyopathy for specific conditions (e.g., epilepsy, cancer,
                    air purification)
                  </div>
                  <div className="self-stretch relative text-base text-darkslategray-100">
                    Discover specialized Yagyopathy treatments for specific
                    conditions, such as epilepsy, cancer support, and air
                    purification. Learn how Yagyopathy can offer relief and
                    support in these unique situations.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="relative rounded-3xs w-[354px] h-[289px] overflow-hidden shrink-0">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/imagemob9@2x.png"
              />
            </div>
            <div className="self-stretch bg-white flex flex-col items-center justify-center py-5 px-0">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative font-medium">
                  Your Path to Mastery
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-xl text-blue font-inter">
                  <div className="self-stretch relative font-medium">
                    Yagya Therapy Self-Learning 16 Hours Course
                  </div>
                  <div className="self-stretch relative text-base text-darkslategray-100">
                    Ready to delve deeper into Yagyopathy? Explore our
                    comprehensive self-learning course that equips you with the
                    knowledge and skills to harness its transformative power.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactUs wereHereToMargin="unset" />
      </div>
      <div className="self-stretch bg-white overflow-hidden hidden flex-col items-center justify-start py-5 px-0 gap-[40px] text-xl text-darkslategray-200 font-body-2 border-t-[1px] border-solid border-gray-400 lg:hidden md:flex sm:flex">
        <Logo yagyopathyFontSize="24px" />
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="relative font-medium">Contact Us </div>
            <div className="self-stretch relative text-base">
              All World Gayatri Pariwar - Shantikunj Dev Sanskriti
              Vishwavidyalaya - Gayatrikunj Haridwar, Uttarakhand - 249411
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="relative font-medium">Email</div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-base text-[inherit]">
              <div className="self-stretch relative">
                <a
                  className="text-[inherit]"
                  href="mailto:yagyopathy@awgp.org"
                  target="_blank"
                >
                  yagyopathy@awgp.org
                </a>
              </div>
              <a
                className="self-stretch relative text-darkslategray-200 [text-decoration:none]"
                href="mailto:cyr@dsvv.ac.in"
                target="_blank"
              >
                cyr@dsvv.ac.in
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="relative font-medium">Links</div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-base">
              <div className="self-stretch relative">Yagyopathy.awgp.org</div>
              <div className="relative">Dsvv.ac.in </div>
              <div className="relative">Awgp.org </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-start pt-5 px-20 pb-0 gap-[40px] text-29xl lg:flex md:hidden sm:hidden">
        <div className="w-full flex flex-col items-center justify-start gap-[80px] max-w-[1280px]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[58px] font-medium">
              Yagyopathy Therapies
            </div>
          </div>
          <Property1ImageLeft
            imageMob02="/imagemob028@2x.png"
            title="Healing for Common Conditions"
            shortTitle="Common ailments treated with Yagyopathy"
            description="Yagyopathy has been shown to effectively address a wide range of common ailments. Explore how Yagyopathy can be used as a complementary therapy for various health concerns."
            property1ImageLeftWidth="unset"
            property1ImageLeftAlignSelf="stretch"
            customImagesBorderRadius="unset"
            customImagesOverflow="unset"
            customImagesFlexShrink="unset"
            imageMob02IconBorderRadius="10px"
            imageMob02IconRight="0%"
            imageMob02IconLeft="0%"
          />
          <Property1ImageRight
            title="Tailored Therapies"
            shortTitle="Yagyopathy for specific conditions (e.g., epilepsy, cancer, air purification)"
            description="Discover specialized Yagyopathy treatments for specific conditions, such as epilepsy, cancer support, and air purification. Learn how Yagyopathy can offer relief and support in these unique situations."
            imageMob02="/imagemob051@2x.png"
            property1ImageRightWidth="unset"
            property1ImageRightAlignSelf="stretch"
          />
          <Property1ImageLeft
            imageMob02="/imagemob074@2x.png"
            title="Your Path to Mastery"
            shortTitle="Yagya Therapy Self-Learning 16 Hours Course"
            description="Ready to delve deeper into Yagyopathy? Explore our comprehensive self-learning course that equips you with the knowledge and skills to harness its transformative power."
            property1ImageLeftWidth="unset"
            property1ImageLeftAlignSelf="stretch"
            customImagesBorderRadius="10px"
            customImagesOverflow="hidden"
            customImagesFlexShrink="0"
            imageMob02IconBorderRadius="unset"
            imageMob02IconRight="0%"
            imageMob02IconLeft="0%"
          />
        </div>
        <ContactUs wereHereToMargin="unset" />
      </div>
      <Footerdesk footerdeskWidth="100%" />
    </div>
  );
};

export default Screen3;
