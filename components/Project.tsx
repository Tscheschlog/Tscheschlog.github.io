import React from 'react'
import { motion } from "framer-motion";

type Props = {
    projName: string;
    description: string;
    image: string;
    index: number;
    totalProjects: number;
  };

function Project({projName, description, image, index, totalProjects}: Props) {
  return (
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
                  Project {index + 1} of {totalProjects}:
                </span>{" "}
                {projName}
              </h4>

              <p className="text-lg text-center md:text-left">
                {description}
              </p>
            </div>
          </div>
  )
}

export default Project;


/*


*/