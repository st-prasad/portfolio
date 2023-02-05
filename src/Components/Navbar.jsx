import React from 'react'

function Navbar() {
  return (
        
//<nav className="bg-[#d9d9d9] px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
<nav className="shadow-[-3px_12px_8px_-4px_rgba(0,0,0,0.48)] bg-[#d9d9d9] px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
  <div className="container flex items-center justify-between mx-auto w-4/6">

  <div className="linksDiv items-center justify-between w-full">
    <ul className="flex p-4 flex-row mediumScreen space-x-8 mt-0 text-sm font-medium border-0">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-black rounded-lg hover:bg-gray-100 hover:border-b-2 hover:border-[#fadccc] hover:text-red-800 focus:border-b-4 focus:border-[#b85118]" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-red-800 md:p-0 ">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
 
  <div className="logoDiv">
    <img src="vite.svg" alt="" className='h-8 w-8' />
  </div>
    
  </div>
</nav>

  )
}

export default Navbar