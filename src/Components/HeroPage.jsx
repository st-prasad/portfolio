import React from "react";
// import Blob from "./Blob";

function HeroPage() {
  return (
    // <div className="Hero z-30 w-full top-0 flex items-center flex-col text-center pt-20 pb-6 relative">
    // <div className="Hero z-30 w-full h-screen top-0 relative bg-[#f8f4eb]">
    <div className="Hero z-30 w-full h-screen bg-[#f8f4eb] flex">
      {/* <div className="heroContainer my-0 mx-auto top-0 bottom-0 absolute flex flex-row items-center justify-between"> */}
      <div className="heroContainer mx-auto flex flex-row items-center justify-between h-[70%] self-center w-10/12">
        {/* border view on hover: <div className="border-4 hover:border-dotted border-transparent hover:border-[#ad98d8] animate-border-radius"> */}
        <div className="HeroText top-48 flex flex-col ml-5 bg-[#f6f8eb] border-4 hover:border-dotted border-[#ad98d8] animate-border-radius p-[10px]">

          <h1
            className="mb-1 md:mb-3 font-bold text-black-500 font-georgia"
            style={{ textShadow: "4px 4px 4px mediumpurple" }}
          >
            Hello, and welcome!
          </h1>
          <p className="w-auto lg:w-96 p-1 md:p-3 font-georgia mb-3 text-base font-bold md:text-2xl">
            <span className="underline decoration-[#b85118] text-2xl">
              I'm Tharindu Prasad,
            </span>
            <br />a full-stack developer and content creator with a passion for
            creating user-friendly, innovative and functional web applications..
          </p>
        </div>
        <div className="HeroImg ml-9 overflow-hidden">
          <img src="myavatar2.png" alt="" className="h-[172x] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
