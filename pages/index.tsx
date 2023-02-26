import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#f7ab07]/80"
    >
      <Head>
        <title>Tscheschlog</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center ">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="/#hero" legacyBehavior>
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media.istockphoto.com/id/875359308/vector/comet-icon.jpg?s=612x612&w=0&k=20&c=igrSrtnPQuXdkccPulaOjUCEWPjGzLal7L0bNFie-gc="
              alt=""
            />
          </div>
        </Link>
      </footer>
    </div>
  );
}
