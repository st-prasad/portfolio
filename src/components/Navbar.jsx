import React from "react";

function Navbar() {
  return (

    <nav className="navComponent shadow-[-3px_12px_8px_-4px_rgba(0,0,0,0.48)] bg-[#d9d9d9] px-2 sm:px-4 py-2.5 fixed w-full z-40 top-0 left-0">
      <div className="container flex items-center justify-between mx-auto w-full md:px-6">
        <div className="linksDiv items-center justify-between w-full [&_a]:text-black">
          <ul className="flex p-4 flex-row mediumScreen m-1 sm:space-x-8 mt-0 text-sm font-medium border-0">
            <li className="w-[20vw] sm:w-auto">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:p-3
                rounded-lg border-b-4 border-[#a9a9a9] hover:border-b-4 hover:border-[gray] focus:border-b-4 focus:border-[black] focus:bg-gray-100"
                aria-current="page"
              >
                <h4 className="text-sm">HOME</h4>
              </a>
            </li>
            <li className="w-[20vw] sm:w-auto">
              <a
                href="#projects"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:p-3
                rounded-lg border-b-4 border-[#a9a9a9] hover:border-b-4 hover:border-[gray] focus:border-b-4 focus:border-[black] focus:bg-gray-100"
              >
                <h4 className="text-sm">Projects</h4>
              </a>
            </li>
            <li className="w-[20vw] sm:w-auto">
              <a
                href="#tech-stack"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:p-3
                rounded-lg border-b-4 border-[#a9a9a9] hover:border-b-4 hover:border-[gray] focus:border-b-4 focus:border-[black] focus:bg-gray-100"
              >
                <h4 className="text-sm">My tech-stack</h4>
              </a>
            </li>
            <li className="w-[20vw] sm:w-auto">
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:p-3
                rounded-lg border-b-4 border-[#a9a9a9] hover:border-b-4 hover:border-[gray] focus:border-b-4 focus:border-[black] focus:bg-gray-100"
              >
                <h4 className="text-sm">CONTACT</h4>
              </a>
            </li>
          </ul>
        </div>

        <div className="logoDiv">
          <img src="vite.svg" alt="" className="h-20 w-auto" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
