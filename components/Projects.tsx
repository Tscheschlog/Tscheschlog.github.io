import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

const projectsVals = [{
  name: "Conway's Game of Life", 
  desc: "Conway's Game of Life is a 2D cellular automaton where cells are alive or dead, based on neighboring cells' state, and evolve over time steps. The implementation uses C++, CMake, and SFML.", 
  image: "#"
},
{
  name: "Dialogflow Collector", 
  desc: "The system is a custom chatbot using Dialogflow ES, ExpressJS, Webhooks, and Cloudinary to guide users in assembling a product. Dialogflow ES allows natural language inputs and generates conversational flow. ExpressJS creates a webhook to receive and process inputs, while Cloudinary stores and retrieves images to provide visual aids to the user. Together, these technologies create an interactive chatbot that provides detailed instructions with visual support.   ", 
  image: "#"
},
{
  name: "Ray Tracing", 
  desc: "A raytracer is a computer graphics technique used to generate realistic images by simulating the behavior of light. This is a typical implementation using C++ and CMake, the technique involves casting a ray from a virtual camera through each pixel in an image plane, and calculating the path of the ray as it interacts with virtual objects in a scene. The shown materials are lambertian, metal, and dielectric.", 
  image: "#"
},
{
  name: "Multiplayer Snake", 
  desc: "In this implementation of Snake, the game supports single-player and multiplayer modes. The game was developed using C++ programming language, leveraging the build system CMake and the multimedia library SFML. The single-player mode requires the player to collect food to grow the snake while avoiding obstacles such as walls and the snake's own body. In multiplayer mode, two players compete to collect food and grow their snakes. ", 
  image: "#"
},
{
  name: "Connect Four", 
  desc: "A two-player strategy game where the objective is to connect four disks of the same color in a row, column, or diagonal. This implementation was created using basic web technologies of HTML, CSS, and vanilla JavaScript. The game board is displayed using an HTML canvas and disks are represented as an integer between 0 - 2. The JavaScript code handles game logic, including detecting valid moves, wins, and turn management. Players can click on the board to drop their disks, and the game ends when a player connects four disks or the board is filled.", 
  image: "#"
},
{
  name: "Typing Test", 
  desc: "A typing test built with vanilla JS, HTML, and CSS lets users gauge their typing speed and accuracy through a web app that shows a text passage, a timer, and a text box for user input. Users start the test by clicking a button or typing the first word, after which the timer counts down. After the user completes the passage, the app presents their typing speed, accuracy, and any errors made.", 
  image: "#"
}]

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
