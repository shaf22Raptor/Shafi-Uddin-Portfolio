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
  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return {
        mobile: width < 768 || height < 500,
        small: width < 850,
        medium: width< 1550,
      };
    }
    return { mobile: false, small: false, medium: false};
  });

  const activeLink = AnchorMonitor();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log("Viewport Width:", width);
      setScreenSize({
        mobile: width < 768 || height < 500,
        small: width < 850,
        medium: width < 1550,
        medium_large: width <1600
      });
    };

    const debounceResize = debounce(handleResize, 150);

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  console.log("Current screen size is", screenSize);

  return (
    <div className="home_container">
      {screenSize.mobile ? (
        <>
          <div className="content">
            <MaintenanceButton screenSize={screenSize}/>
            <About screenSize={"mobile"}/>
            <Skills />
            <ProjectsSample screenSize={"medium"}/>
            <Socials />
            <Description />
          </div>
        </>
      ) : (
        <>
          <div className="main">
            <Main activeLink={activeLink} screenSize={screenSize}/>
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

const About = ({ activeLink, screenSize }) => (
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

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

