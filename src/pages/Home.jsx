import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Socials from '../components/HomeComponents/Socials';
import Skills from '../components/HomeComponents/Skills';
import ProjectsSample from '../components/HomeComponents/ProjectsSample';
import MaintenanceButton from "../components/HomeComponents/MaintenanceButton";
import Header from "../components/HomeComponents/Header";
import AnchorMonitor from "../components/AnchorMonitor";
import Description from "../components/HomeComponents/Description";

export default function Home() {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);
  const activeLink = AnchorMonitor();

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home_container">
      {smallScreen ? (
        <>
          <div className="content">
            <MaintenanceButton />
            <About />
            <Skills />
            <ProjectsSample />
            <Socials />
            <Description />
          </div>
        </>
      ) : (
        <>
          <div className="main">
            <Main activeLink={activeLink}/>
          </div>
          <div className="content">
            <About />
            <Skills />
            <ProjectsSample />
          </div>
        </>
      )}
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
      <Anchors activeLink={activeLink} />
      <Socials />
      <Description />
    </div>
  </section>
);

const About = ({ activeLink }) => (
  <section className="about" id="about">
    <div className="about-content">
      <Header text="About me" activeLink={activeLink} />
      <p style={{ textAlign: "justify" }}>
        I am a passionate software engineering student, deeply committed to solving complex challenges through
        innovative solutions. Currently pursuing a <b>Computer and Software Systems Engineering</b> degree at <b>The Queensland University of Technology</b>, I have developed proficiency in a diverse range of programming
        languages and frameworks, including <b>Java</b> and <b>React</b>. <br></br><br></br>

        My interests also extend to cloud computing, particularly  <b>Amazon Web Services (AWS)</b>, where I am currently working on developing a video streaming and sharing platform
        using AWS infrastructure and serverless components. I constantly strive to create impactful, efficient,
        maintainable, and scalable software solutions.
      </p>
    </div>
  </section>
);
