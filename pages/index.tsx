import type { NextPage } from "next";
import Header from "../components/header";
import ContactUs from "../components/contact-us";
import Logo from "../components/logo";
import ContainerHeroForm from "../components/container-hero-form";
import WorkshopCard from "../components/workshop-card";
import CardContainer from "../components/card-container";
import Footerdesk from "../components/footerdesk";

const Screen1: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start gap-[10px] text-center text-xl text-darkslategray-200 font-body-2 xl:1200:flex">
      <Header />
      <main className="self-stretch bg-white overflow-hidden hidden flex-col items-center justify-start pt-5 px-4 pb-0 gap-[40px] lg:hidden md:flex sm:flex xl:1200:hidden">
        <section className="self-stretch flex flex-col items-center justify-start gap-[80px] text-center text-xl text-darkslategray-100 font-inter">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px] text-29xl font-dm-sans lg:1024:flex-col">
            <div className="relative w-[358px] h-[379px]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/imagemob01@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[40px] lg:1024:flex-row">
              <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-medium font-inherit inline-block min-w-[320px]">
                Welcome to Yagyopathy: Bridging Spirituality and Science
              </h1>
              <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-5xl font-inter">
                <div className="self-stretch relative font-medium inline-block min-w-[320px]">
                  Unlocking Ancient Wisdom for Modern Well-being
                </div>
                <div className="self-stretch relative text-xl inline-block min-w-[320px]">
                  Step into the world of Yagyopathy, where timeless wisdom and
                  cutting-edge science converge to guide you on a transformative
                  journey towards self-discovery, balance, and harmony.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px] border-t-[1px] border-solid border-gray-200 lg:h-auto lg:flex-row lg:gap-[40px] lg:items-center lg:justify-between lg:pt-5 lg:pb-5 lg:box-border md:flex-row md:pt-5 md:pb-0 md:box-border sm:h-auto sm:flex-col sm:gap-[52px]">
            <div className="self-stretch h-[130px] flex flex-col items-center justify-between">
              <div className="self-stretch rounded-41xl h-[52px] flex flex-row items-center justify-center">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.8]"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="self-stretch bg-gray-100 flex flex-row items-center justify-center p-2.5">
                <div className="flex-1 relative">Yagyopathy Workshops</div>
              </div>
            </div>
            <img
              className="relative w-40 h-0 opacity-[0.2]"
              alt=""
              src="/line-3.svg"
            />
            <div className="self-stretch h-[130px] flex flex-col items-center justify-between">
              <div className="rounded-41xl box-border w-[52px] h-[52px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.8]"
                  alt=""
                  src="/frame1.svg"
                />
              </div>
              <div className="bg-gray-100 w-[164px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="flex-1 relative">Online Courses</div>
              </div>
            </div>
            <img
              className="relative w-40 h-0 opacity-[0.2]"
              alt=""
              src="/line-3.svg"
            />
            <div className="self-stretch h-[130px] flex flex-col items-center justify-start gap-[10px]">
              <div className="rounded-41xl box-border w-[52px] h-[52px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.8]"
                  alt=""
                  src="/frame2.svg"
                />
              </div>
              <div className="self-stretch bg-gray-100 flex flex-row items-center justify-center p-2.5">
                <div className="flex-1 relative">Yagyavalkya Center</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[80px] text-blue sm:flex-col">
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
              <div className="relative rounded-3xs w-[354px] h-[289px] overflow-hidden shrink-0">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover lg:w-[463px] lg:h-[377px]"
                  alt=""
                  src="/imagemob02@2x.png"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] min-w-[358px] max-w-[470px]">
                <div className="rounded bg-gray-100 flex flex-row items-start justify-center py-1 px-2 border-[1px] border-solid border-gray-300">
                  <div className="relative font-medium">About Yagyopathy</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-17xl text-darkslategray-100 font-dm-sans">
                  <h2 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
                    Discover the Roots and Philosophy of Yagyopathy
                  </h2>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-5xl font-inter">
                    <div className="self-stretch relative font-medium">
                      A Spiritual Path to Holistic Well-being
                    </div>
                    <div className="self-stretch relative text-lg">
                      Delve into the rich history of Yagyopathy, tracing its
                      origins back to the ancient Vedic traditions. Explore the
                      profound philosophy that underlies this practice, blending
                      spiritual beliefs and modern scientific principles
                      seamlessly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
              <div className="relative w-[354px] h-[289px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover lg:w-[463px] lg:h-[377px]"
                  alt=""
                  src="/imagemob021@2x.png"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] min-w-[358px] max-w-[470px]">
                <div className="rounded bg-gray-100 flex flex-row items-start justify-center py-1 px-2 border-[1px] border-solid border-gray-300">
                  <div className="relative font-medium">
                    Yagyopathy Therapies
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-17xl text-darkslategray-100 font-dm-sans">
                  <h2 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
                    Healing and Transformation through Yagyopathy
                  </h2>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-5xl font-inter">
                    <div className="self-stretch relative font-medium">
                      Customized Therapies for Well-being
                    </div>
                    <div className="self-stretch relative text-lg">
                      Experience the power of Yagyopathy in addressing a wide
                      range of common ailments, and discover specialized
                      Yagyopathy treatments for specific conditions such as
                      epilepsy, cancer support, and air purification.
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
                  src="/imagemob03@2x.png"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-start py-5 px-0 box-border gap-[20px] min-w-[358px] max-w-[470px]">
                <div className="rounded bg-gray-100 flex flex-row items-start justify-center py-1 px-2 border-[1px] border-solid border-gray-300">
                  <div className="relative font-medium">
                    Yagyopathy Training and Resources
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-17xl text-darkslategray-100 font-dm-sans sm:items-center sm:justify-start">
                  <h2 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
                    Your Path to Mastery and Knowledge
                  </h2>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-5xl font-inter">
                    <div className="self-stretch relative font-medium">
                      Unlock the Secrets of Yagyopathy
                    </div>
                    <div className="self-stretch relative text-lg">
                      Embark on your Yagyopathy journey with confidence. Choose
                      from a range of learning options, including workshops,
                      online courses, and the wealth of resources available at
                      the Yagyavalkya Center for Yagya Research.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactUs wereHereToMargin="0" />
      </main>
      <div className="self-stretch bg-white overflow-hidden hidden flex-col items-center justify-start py-5 px-0 gap-[40px] border-t-[1px] border-solid border-gray-400 lg:hidden md:flex sm:flex xl:1200:hidden">
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
            <footer className="self-stretch flex flex-col items-center justify-start gap-[4px] text-center text-base text-darkslategray-200 font-body-2">
              <div className="self-stretch relative">Yagyopathy.awgp.org</div>
              <div className="relative">Dsvv.ac.in </div>
              <div className="relative">Awgp.org </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start pt-5 px-20 pb-0 gap-[40px] lg:flex md:hidden xl:1200:flex">
        <div className="w-full flex flex-col items-center justify-start gap-[80px] max-w-[1280px]">
          <ContainerHeroForm />
          <WorkshopCard />
          <CardContainer />
        </div>
        <ContactUs wereHereToMargin="unset" />
      </div>
      <Footerdesk footerdeskWidth="100%" />
    </div>
  );
};

export default Screen1;
