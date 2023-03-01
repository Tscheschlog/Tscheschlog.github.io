import React from "react";
import { motion } from "framer-motion";

type Props = {
  company: string;
  title: string;
  summary: string[];
  startToEnd: string;
  logo: string;
  tools: string[];
};

export default function ExperienceCard({ company, title, summary, startToEnd, logo }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] h-[560px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] object-cover object-center"
        src= {logo}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          {startToEnd}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>{summary[0]}</li>
          <li>{summary[1]}</li>
          <li>{summary[2]}</li>
          <li>{summary[3]}</li>
        </ul>
      </div>
    </article>
  );
}
