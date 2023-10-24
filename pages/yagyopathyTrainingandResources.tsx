import type { NextPage } from "next";
import Header from "../components/header";
import ContactUs from "../components/contact-us";
import Logo from "../components/logo";
import Property1ImageLeft from "../components/property1-image-left";
import Property1ImageRight from "../components/property1-image-right";
import Footerdesk from "../components/footerdesk";

const Screen4: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start gap-[10px] text-center text-17xl text-darkslategray-100 font-dm-sans">
      <Header />
      <div className="self-stretch bg-white hidden flex-col items-center justify-start pt-5 px-4 pb-0 gap-[40px] md:flex sm:flex">
        <div className="self-stretch flex flex-col items-center justify-start gap-[80px]">
          <div className="self-stretch flex flex-col items-center justify-start text-29xl">
            <div className="relative leading-[58px] font-medium inline-block w-[324px]">
              Yagyopathy Training and Resources
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="relative rounded-3xs w-[354px] h-[289px] overflow-hidden shrink-0">
              <img
                className="absolute h-full w-full top-[0%] right-[-0.14%] bottom-[0%] left-[0.14%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/imagemob04@2x.png"
              />
            </div>
            <div className="self-stretch bg-white flex flex-col items-center justify-center py-5 px-0">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative font-medium">
                  Learn from the Experts
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-xl text-blue font-inter">
                  <div className="self-stretch relative font-medium">
                    Learn from the Experts
                  </div>
                  <div className="self-stretch relative text-base text-darkslategray-100">
                    Participate in Yagyopathy workshops and online courses led
                    by experienced practitioners. Expand your knowledge and
                    engage in practical learning experiences.
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
                src="/imagemob07@2x.png"
              />
            </div>
            <div className="self-stretch bg-white flex flex-col items-center justify-center py-5 px-0">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative font-medium">
                  A Hub for Knowledge
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-xl text-blue font-inter">
                  <div className="self-stretch relative font-medium">
                    Yagyavalkya Center for Yagya Research
                  </div>
                  <div className="self-stretch relative text-base text-darkslategray-100">
                    Visit the Yagyavalkya Center for Yagya Research to access a
                    wealth of information and resources related to Yagyopathy.
                    Stay updated on the latest research and discoveries.
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
                src="/imagemob10@2x.png"
              />
            </div>
            <div className="self-stretch bg-white flex flex-col items-center justify-center py-5 px-0">
              <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative font-medium">
                  Educational Resources
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-xl text-blue font-inter">
                  <div className="self-stretch relative font-medium">
                    Downloadable materials on Yagyopathy
                  </div>
                  <div className="self-stretch relative text-base text-darkslategray-100">
                    Download materials, including guides, books, and videos, to
                    aid in your journey through Yagyopathy. These resources will
                    enhance your understanding and practice.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactUs wereHereToMargin="unset" />
      </div>
      <div className="self-stretch bg-white overflow-hidden hidden flex-col items-center justify-start py-5 px-0 gap-[40px] text-xl text-darkslategray-200 font-body-2 border-t-[1px] border-solid border-gray-400 md:flex sm:flex">
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
      <div className="lg:flex md:hidden sm:hidden self-stretch bg-white flex flex-col items-center justify-start pt-5 px-20 pb-0 gap-[40px] text-29xl lg:flex">
        <div className="w-full flex flex-col items-center justify-start gap-[80px] max-w-[1280px]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[58px] font-medium">
              Yagyopathy Training and Resources
            </div>
          </div>
          <Property1ImageLeft
            imageMob02="/imagemob041@2x.png"
            title="Learn from the Experts"
            shortTitle="Learn from the Experts"
            description="Participate in Yagyopathy workshops and online courses led by experienced practitioners. Expand your knowledge and engage in practical learning experiences."
            property1ImageLeftWidth="unset"
            property1ImageLeftAlignSelf="stretch"
            customImagesBorderRadius="10px"
            customImagesOverflow="hidden"
            customImagesFlexShrink="0"
            imageMob02IconBorderRadius="unset"
            imageMob02IconRight="-0.15%"
            imageMob02IconLeft="0.15%"
          />
          <Property1ImageRight
            title="A Hub for Knowledge"
            shortTitle="Yagyavalkya Center for Yagya Research"
            description="Visit the Yagyavalkya Center for Yagya Research to access a wealth of information and resources related to Yagyopathy. Stay updated on the latest research and discoveries."
            imageMob02="/imagemob071@2x.png"
            property1ImageRightWidth="unset"
            property1ImageRightAlignSelf="stretch"
          />
          <Property1ImageLeft
            imageMob02="/imagemob101@2x.png"
            title="Educational Resources"
            shortTitle="Downloadable materials on Yagyopathy"
            description="Download materials, including guides, books, and videos, to aid in your journey through Yagyopathy. These resources will enhance your understanding and practice."
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
      <Footerdesk footerdeskWidth="1280px" />
    </div>
  );
};

export default Screen4;
