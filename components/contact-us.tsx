import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ContactUsType = {
  /** Style props */
  wereHereToMargin?: CSSProperties["margin"];
};

const ContactUs: NextPage<ContactUsType> = ({ wereHereToMargin }) => {
  const wereHereToStyle: CSSProperties = useMemo(() => {
    return {
      margin: wereHereToMargin,
    };
  }, [wereHereToMargin]);

  return (
    <div className="flex flex-col items-center justify-start py-[60px] px-0 box-border text-center text-base text-neutrals-4 font-inter self-stretch">
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <b className="relative leading-[16px] uppercase">contact us</b>
        <div
          className="self-stretch relative text-29xl leading-[54px] font-medium font-dm-sans text-darkslategray-100"
          style={wereHereToStyle}
        >
          We're Here to Support Your Journey
        </div>
        <div className="self-stretch relative leading-[24px] font-body-2">
          Have questions or seeking more information? Don't hesitate to reach
          out to the Yagyavalkya Center for Yagya Research.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
