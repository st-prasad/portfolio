import { motion } from "framer-motion";
import React from "react";
// import { FaMusic } from "react-icons/fa";

const Skill = ({ className, skillItem }) => {
  const Icon = skillItem?.icon;
  console.log(Icon);
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className={`h-24 md:h-40 w-5/6 group flex ${className}`}
    >
      {/* <div className="rounded border w-5/6 h-full relative"> */}
      <div className="w-11/12 rounded border relative group-hover:bg-gray-400">
        {/* <img src="images/vite.svg" alt="" className='group-hover:grayscale transition duration-300 ease-in-out rounded border object-cover w-24 h-24 md:w-28 md:h-28 filter' /> */}
        <div className="skillDiv flex flex-col h-full">
          {/* <img
            src={skillItem.image}
            alt=""
            className="w-full min-h-0 group-hover:grayscale transition duration-300 ease-in-out object-contain filter flex-grow-[4]"
            // className="h-full w-full group-hover:grayscale transition duration-300 ease-in-out object-contain filter flex-grow-[4]"
          /> */}
          <Icon
            className="w-full min-h-0 transition duration-300 ease-in-out object-contain filter flex-grow-[4]"
            // className="h-full w-full group-hover:grayscale transition duration-300 ease-in-out object-contain filter flex-grow-[4]"
          />
          {/* <div className="card-icon">{skillItem.icon}</div> */}
          {/* <div className="card-icon"><Icon/></div> */}
          {/* {Icon && <Icon/>} */}
          {/* <div icon={FaMusic}> </div> */}
          <h2 className="flex-grow-[1]">{skillItem.name}</h2>
        </div>
        {/* <img src="images/vite.svg" alt="" className='opacity-80 group-hover:opacity-0 group-hover:grayscale transition duration-300 ease-in-out rounded border object-cover w-24 h-24 md:w-28 md:h-28 filter' /> */}
        <div className="hoverSkillDiv absolute h-[30px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:bg-white rounded z-0 transition duration-300 ease-in-out "
        style={{ width: `${skillItem.level}%` }}
        >
          {/* <p className="text-3xl opacity-100">100%</p> */}
        </div>
        {/* <div className='absolute top-0 opacity-0 group-hover:opacity-80 group-hover:bg-white h-full w-full rounded z-0 transition duration-300 ease-in-out '>
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl opacity-100">100%</p>
                    </div>
                </div> */}
      </div>

      {/* <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white h-24 w-24 rounded z-0 transition duration-300 ease-in-out '>
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl opacity-100">100%</p>
                </div>
            </div> */}
    </motion.div>
  );
};

export default Skill;
// import { motion } from 'framer-motion'
// import React from 'react'

// const Skill = ({className}) => {
//   return (
//     <div className={`group flex ${className}`}>
//         <motion.div
//         initial={{
//             x: -200,
//             opacity:0}}
//         whileInView={{opacity:1,
//             x: 0
//         }}
//         transition={{duration:1.5}}
//         src="images/vite.svg"
//         className="rounded border object-cover w-24 h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
//         >
//             <img src="images/vite.svg" alt="" className='opacity-80 group-hover:opacity-0 group-hover:grayscale transition duration-300 ease-in-out' />
//             <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white h-24 w-24 rounded z-0 transition duration-300 ease-in-out '>
//                 <div className="flex items-center justify-center h-full">
//                     <p className="text-3xl opacity-100">100%</p>
//                 </div>
//             </div>

//         </motion.div>
//     </div>
//   )
// }

// export default Skill
