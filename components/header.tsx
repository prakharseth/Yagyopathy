/** @format */

import { useState, useCallback } from "react";
import PortalPopup from "./portal-popup";

import React from "react";
import { cn } from "../utils/cn";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

export default function Header() {
  const router = useRouter();

  const [isNav1Open, setNav1Open] = useState(false);

  const openNav1 = useCallback(() => {
    setNav1Open(true);
  }, []);

  const closeNav1 = useCallback(() => {
    setNav1Open(false);
  }, []);

  const headers = [
    { label: "Home", link: "/" },
    { label: "About Yagyopathy", link: "/aboutYagyopathy" },
    { label: "Yagyopathy Therapies", link: "/yagyopathyTherapies" },
    {
      label: "Yagyopathy Training and Resources",
      link: "/yagyopathyTrainingandResources"
    }
  ];

  return (
    <>
      <header className="self-stretch bg-white h-24 flex flex-row items-center justify-between py-5 px-[60px] box-border text-center text-5xl text-darkslategray-100 font-body-2 lg:flex md:flex sm:flex">
        <div className="rounded w-[170px] flex flex-row items-center justify-center p-2.5 box-border">
          <div className="flex-1 relative font-semibold">Yagyopathy</div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-[8px] cursor-pointer"
          onClick={openNav1}
        >
          <img className="relative w-[30px] h-0.5" alt="" src="/line-10.svg" />
          <img className="relative w-[30px] h-0.5" alt="" src="/line-10.svg" />
          <img className="relative w-[30px] h-0.5" alt="" src="/line-10.svg" />
        </div>
      </header>
      {isNav1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNav1}
        >
          {/* <Nav1 onClose={closeNav1} /> */}
          <div className="relative rounded-3xs bg-white box-border flex flex-col items-start justify-start p-2.5 max-w-full max-h-full overflow-auto text-center text-xl text-darkslategray-100 font-dm-sans border-[1px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[10px]">
              {headers.map((d, i) => (
                <Link
                  href={d.link}
                  className={cn(
                    "self-stretch  rounded  flex flex-row items-center justify-center py-1 px-2.5 text-left text-darkslategray  ",
                    {
                      " bg-darkslategray-300  text-white ":
                        router.pathname === d.link
                    }
                  )}
                >
                  <div className="relative">{d.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </PortalPopup>
      )}
    </>
  );
}
