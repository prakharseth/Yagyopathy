import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type LogoType = {
  /** Style props */
  yagyopathyFontSize?: CSSProperties["fontSize"];
};

const Logo: NextPage<LogoType> = ({ yagyopathyFontSize }) => {
  const yagyopathyStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: yagyopathyFontSize,
    };
  }, [yagyopathyFontSize]);

  return (
    <div className="rounded flex flex-row items-center justify-center p-2.5 text-left text-9xl text-darkslategray-100 font-body-2">
      <div className="relative font-semibold" style={yagyopathyStyle}>
        Yagyopathy
      </div>
    </div>
  );
};

export default Logo;
