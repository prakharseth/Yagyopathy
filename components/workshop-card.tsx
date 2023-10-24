import type { NextPage } from "next";

const WorkshopCard: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[40px] text-center text-xl text-darkslategray-100 font-inter">
      <div className="self-stretch relative box-border h-0 border-t-[1px] border-solid border-gray-200" />
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-10 gap-[40px]">
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <div className="rounded-41xl box-border w-[52px] h-[52px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.8]"
              alt=""
              src="/frame3.svg"
            />
          </div>
          <div className="bg-gray-100 flex flex-row items-center justify-center p-2.5">
            <div className="relative">Yagyopathy Workshops</div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-px opacity-[0.2]"
          alt=""
          src="/line-31.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <div className="rounded-41xl box-border w-[52px] h-[52px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.8]"
              alt=""
              src="/frame1.svg"
            />
          </div>
          <div className="bg-gray-100 flex flex-row items-center justify-center p-2.5">
            <div className="relative inline-block w-[198px] shrink-0">
              Online Courses
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-px opacity-[0.2]"
          alt=""
          src="/line-31.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <div className="rounded-41xl box-border w-[52px] h-[52px] flex flex-row items-center justify-center border-[1px] border-solid border-gray-200">
            <img
              className="relative w-7 h-7 overflow-hidden shrink-0 opacity-[0.8]"
              alt=""
              src="/frame2.svg"
            />
          </div>
          <div className="bg-gray-100 flex flex-row items-center justify-center p-2.5">
            <div className="relative inline-block w-[198px] shrink-0">
              Yagyavalkya Center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
