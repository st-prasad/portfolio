import React from "react";

function HeroPage() {
  return (
    // <div className="Hero z-30 w-full top-0 flex items-center flex-col text-center pt-20 pb-6 relative">
    <div className="Hero z-30 w-full h-screen top-0 relative bg-[#f8f4eb]">
      <div className="heroContainer my-0 mx-auto top-0 bottom-0 absolute flex flex-row items-center justify-between">

      <div className="HeroText top-48 flex flex-col left-5 ml-5 bg-[#f8f4eb]">
        <h1
          className="text-4xl md:bg-red-500 lg:bg-black mb-1 md:mb-3 font-bold text-black-500 font-georgia"
          style={{ textShadow: "4px 4px 4px mediumpurple" }}
        >
          Hello, and welcome!
        </h1>
          <p className="w-96 text-lg p-3 font-georgia mb-3">
            <span className="underline decoration-[#b85118]">I'm Tharindu Prasad,</span> <br/>
 a full-stack developer and content creator with a passion for creating user-friendly, innovative and functional web applications..
          </p>
      </div>
      <div className="HeroImg ml-9 overflow-hidden">
      <img src="myavatar2.png" alt="" className='h-[172x] object-cover' />
      </div>
      </div>
    </div>
  );
}

export default HeroPage;
