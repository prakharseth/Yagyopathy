import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Logo from "./logo";

type FooterdeskType = {
  /** Style props */
  footerdeskWidth?: CSSProperties["width"];
};

const Footerdesk: NextPage<FooterdeskType> = ({ footerdeskWidth }) => {
  const footerdeskStyle: CSSProperties = useMemo(() => {
    return {
      width: footerdeskWidth,
    };
  }, [footerdeskWidth]);

  return (
    <div
      className="lg:flex md:hidden sm:hidden w-full bg-white box-border overflow-hidden flex flex-row items-start justify-between max-w-[1280px] text-left text-sm text-darkslategray-200 font-body-2 border-t-[1px] border-solid border-gray-400"
      style={footerdeskStyle}
    >
      <div className="self-stretch w-[398px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-[107px] px-[100px] box-border">
        <Logo yagyopathyFontSize="28px" />
      </div>
      <div className="bg-white box-border w-[731px] h-[280px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-6 border-l-[1px] border-solid border-darkslategray-400">
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative font-medium">Contact us </div>
            <div className="self-stretch relative text-xs">
              All World Gayatri Pariwar - Shantikunj Dev Sanskriti
              Vishwavidyalaya - Gayatrikunj Haridwar, Uttarakhand - 249411
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative font-medium">Email</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-xs text-[inherit]">
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
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative font-medium">Links</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-xs">
              <div className="self-stretch relative">Yagyopathy.awgp.org</div>
              <div className="self-stretch relative">Dsvv.ac.in </div>
              <div className="self-stretch relative">Awgp.org </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerdesk;
