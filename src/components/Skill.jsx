import { motion } from "framer-motion";
import React from "react";

const Skill = ({ className, skillItem }) => {
  const Icon = skillItem?.icon;
  console.log(Icon);
  return (
    <motion.div
      // initial={{
      //   x: -200,
      //   opacity: 0,
      // }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1.5 }}
      className={`h-24 md:h-40 w-5/6 group flex ${className}`}
    >
      <div className="w-11/12 rounded border relative group-hover:bg-gray-400">

        <div className="skillDiv flex flex-col h-full">

          <Icon
            className="w-full min-h-0 transition duration-300 ease-in-out object-contain filter flex-grow-[4] text-[#191970]"
          />

          <h6 className="flex-grow-[1]">{skillItem.name}</h6>
        </div>

        <div className="hoverSkillDiv absolute h-[30px] bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:bg-white rounded z-0 transition duration-300 ease-in-out "

        style={{ width: `${skillItem.level}%` }}
        ><h5 className="text-xs">{skillItem.level}</h5>
        </div>

      </div>


    </motion.div>
  );
};

export default Skill;