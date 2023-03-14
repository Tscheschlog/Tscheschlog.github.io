import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

const projectsVals = [{name: "Project Test 1", desc: "Project 1 Description", image: "#"},
                      {name: "Project Test 2", desc: "Project 2 Description", image: "#"},
                      {name: "Project Test 2", desc: "Project 2 Description", image: "#"}]

const Projects = ({}: Props) => {
  const projects = [0, 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20
        scrollbar-thumb-[#f7ab07]/80"
      >
        {projectsVals.map((currProject, i) => (
          // eslint-disable-next-line react/jsx-key
          <Project projName={currProject.name} description={currProject.desc} image={currProject.image} index={i} totalProjects={projectsVals.length} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
