import React from "react";

function Description() {
  return (
    <div className="Hero descComp flex items-center justify-center flex-col text-center pt-20 pb-6 relative">
      <div className="flex flex-col items-center absolute top-20 left-5">
        <h1
          className="text-3xl md:text-8xl mb-1 md:mb-3 font-bold text-black-500 font-georgia"
          style={{ textShadow: "4px 4px 4px mediumpurple" }}
        >
          Tharindu Prasad
        </h1>
        <div className="md:w-[500px] p-3 shadow-lg mx-auto md:mr-auto lg:mx-auto">
          <p className="font-georgia text-xl md:text-7xl mb-3 font-semibold ">
            Full-stack Developer
          </p>
          <p className="font-palatino text-lg md:text-5xl /*max-w-xl*/ mb-6 font-bold">
            I am a full-stack developer and content creator with a passion for
            creating user-friendly, innovative and functional web applications..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
