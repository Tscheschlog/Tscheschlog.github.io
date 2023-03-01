import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}/>
        <Skill directionLeft={true} proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}/>
        <Skill proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"} />
        <Skill proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} />
        <Skill proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} />
        <Skill proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"} />
        <Skill proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} />
        <Skill proficiency={"100"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} />
      </div>
    </motion.div>
  );
}

export default Skills;
