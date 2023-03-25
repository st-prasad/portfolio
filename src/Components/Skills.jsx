import { motion } from "framer-motion";

import React from "react";
import { skillsArray } from "../ProjectData";
import Skill from "./Skill";

const Skills = () => {
  const skillItems = skillsArray.map((skillItem)=>
      <Skill key={skillItem.name} className="skill" skillItem={skillItem} />
  )

  return (
    <motion.div
      className="flex relative flex-col text-center h-[50vh] mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
