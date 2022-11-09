import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#344526]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-[#FFD153]">Hei, jeg heter</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#E9B116]">
          Tilde Eriksen Eine
          
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#FFD153]">
          Jeg er IT-student.
        </h2>
        <p className="text-[#FFD153] py-4 max-w-[700px]">
          Takk for at du besøker siden min! Se gjerne gjennom portefølgen min
        </p>
        <div>
          <button className="text-[#FFD153] group border-2 px-6 py-3 my-2 flex items-center border-[#E9B116] hover:bg-[#1E2E05] hover:border-[#E9B116] hover:text-[#E9B116]">
            se arbeid
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
