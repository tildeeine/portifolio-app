import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#1E2E05] text-[#FFD153]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E9B116]">
              Om meg
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hei. Jeg er Tilde, hyggelig å møte deg. Se gjerne gjennom siden min!</p>
          </div>
          <div>
            <p>Jeg er student i kommunikasjonsteknologi og digital sikkerhet ved NTNU.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
