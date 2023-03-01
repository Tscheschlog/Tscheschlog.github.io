import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab07]/80"
      >
        <ExperienceCard company={"Florida Gulf Coast University"} title={"Student SWE"} summary={["Create custom coversation using Dialogflow ES", "Wrote servers using Express.js that communicate with each other ", "Created clean & effective JavaScript for webhooks", "Met and tracked deadlines throughout SDLC (Agile)"]} startToEnd={"December 2022 to Present"} logo={"https://www.brandcolorcode.com/images/color-palette/florida-gulf-coast-university-fgcu.png"} tools={[]} />
        <ExperienceCard company={"LabX"} title={"Intern Developer"} summary={["Worked exclusively in Ubuntu Linux", "Used raspberry pi in testing and building software", "Debugged compiler, build, and linker errors", "Created simple embedded applications using FPrime (spaceflight applications)"]} startToEnd={" November 2021 to February 2022"} logo={"data:image/png;base64,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"} tools={[]} />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
