import React from "react";
import { Link } from "react-router-dom";

import Socials from '../components/HomeComponents/Socials';
import Skills from '../components/HomeComponents/Skills';
import ProjectsSample from '../components/HomeComponents/ProjectsSample';
import MaintenanceButton from "../components/HomeComponents/MaintenanceButton";
import Header from "../components/HomeComponents/Header";
import AnchorMonitor from "../components/AnchorMonitor";
import Description from "../components/HomeComponents/Description";

export default function Home() {
  const activeLink = AnchorMonitor();
  return (
      <div className="home_container">
        <div className="main">
          <Main activeLink={activeLink}/>
        </div>
        <div className="content">
          <About />
          <Skills />
          <ProjectsSample />
          <Shortcuts />
        </div>
      </div>
  );
}

const Anchors = ({ activeLink }) => (
  <section className="anchors">
    <div className="anchors">
      <a href="#about" className={`link ${activeLink === 'about' ? 'active' : ''}`}>About</a><br />
      <a href="#skills" className={`link ${activeLink === 'skills' ? 'active' : ''}`}>Skills</a><br />
      <a href="#projects" className={`link ${activeLink === 'projects' ? 'active' : ''}`}>Projects</a>
    </div>
  </section>
);

const Main = ({ activeLink }) => (
  <section className="main" id="main">
    <div className="main-content">
      <MaintenanceButton />
      <Anchors activeLink={activeLink}/>
      <Description />
      <Socials />
    </div>
  </section>
);

const About = ({activeLink}) => (
  <section className="about" id="about">
    <div className="about-content">
      <Header text = "About me" activeLink={activeLink}/>
      <p>
        I am a dedicated software engineering student with a passion for solving complex problems through code.
        Currently pursuing a <b>Computer and Software Systems Engineering degree</b> at <b>The Queensland University of Technology</b>,I am proficient in several programming languages,
        such as <b>C#</b>, <b>Java</b>, and <b>Python</b>. I am very eager to apply my knowledge to real-world projects.
        <br /><br />
        Hello
      </p>
    </div>
  </section>
);

const Shortcuts = () => (
  <section className="shortcuts">
    <div className="shortcuts">
      <Link to="/projects">Projects</Link>
    </div>
  </section>
);
