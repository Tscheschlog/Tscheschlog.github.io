import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-grey-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQEXi6YIP2vbTQ/profile-displayphoto-shrink_800_800/0/1654698345923?e=2147483647&v=beta&t=rIqfeYq4k_gZ-mvSzJ7j1tIhTzqBGS7nXNUdyIALnpI"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
        md:md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a] hover:bg-purple-400 ">
            l
          </span>
          <span className="underline decoration-[#f7ab0a] hover:bg-purple-500 ">
            i
          </span>
          <span className="underline decoration-[#f7ab0a] hover:bg-purple-600 ">
            t
          </span>
          <span className="underline decoration-[#f7ab0a] hover:bg-purple-700 ">
            t
          </span>
          <span className="underline decoration-[#f7ab0a] hover:bg-purple-800 ">
            l
          </span>
          <span className="underline decoration-[#f7ab0a] hover:bg-purple-900 ">
            e
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          A little about me: I{"'"}ve always loved creating things and had my
          first crack at coding when working with RPG Maker when I was still in
          elementary school. I{"'"}ve created two games since then and hope to
          grow my knowledge in coding. I enjoy partnering with my fellow
          students and professors to create new and innovative ideas. I am
          currently working on projects using Unreal Engine and C++ programming
          language. I am looking to expand my knowledge in all aspects of
          programming to ensure the products I create meet the highest standard
          of clean code. Looking toward the future, I am currently looking for
          an opportunity that will expand my knowledge in programming and create
          a strong network to build upon. Working in the VR/AR space is at the
          top of my list, however, I am open to learning all aspects of software
          engineering.
        </p>
      </div>
    </div>
  );
}

export default About;
