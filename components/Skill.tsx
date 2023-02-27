import React from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  proficiency: string;
  icon: string;
};

function Skill({ directionLeft, proficiency, icon }: Props) {
  return (
    <div className="top-10 group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={icon}
        className="rounded-lg border border-gray-500 object-cover h-20 w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-20 w-20
      rounded-lg z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{proficiency + "%"}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
