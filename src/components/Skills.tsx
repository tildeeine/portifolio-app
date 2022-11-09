import React from "react";
import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";
import Event from "../assets/event-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#1A2704]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-[#FFD153] font-bold inline border-b-2 border-[#E9B116]">
            Ferdigheter
          </p>
          <p className="py-4 text-[#FFD153]">Ta en titt på mine erfaringer</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center text-[#E9B116] py-8 ">
          <div className="bg-[#243407] shadow-md shadow-[#1E2E05] hover:scale-110 duration-500 pt-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Developing</p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

          <div className="bg-[#243407] shadow-md shadow-[#1E2E05] hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Design</p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

          <div className="bg-[#243407] shadow-md shadow-[#1E2E05] hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Event} alt="Event icon" />
            <p className="my-4 font-semibold">Event</p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
