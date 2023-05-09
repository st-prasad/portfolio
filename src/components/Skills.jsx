import { motion } from "framer-motion";

import React from "react";
import { skillsArray } from "../portfolioData";
import Skill from "./Skill";

const Skills = () => {
  const skillItems = skillsArray.map((skillItem)=>
      <Skill key={skillItem.name} className="skill" skillItem={skillItem} />
  )

  return (
    <motion.div
      className="flex relative flex-col text-center h-full mx-auto items-center"
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex-grow-[2]">
        <h3 className="font-georgia">my tech stack</h3>
      </div>
      <div className="w-[80vw] flex flex-row flex-grow-[3] flex-wrap [&>.skill]:w-1/4">
        {skillItems}
      </div>
    </motion.div>
  );
};

export default Skills;
