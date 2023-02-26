import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

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
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                These example sentences are selected automatically from various
                online news sources to reflect current usage of the word text.
                Views expressed in the examples do not represent the opinion of
                Merriam-Webster or its editors.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
