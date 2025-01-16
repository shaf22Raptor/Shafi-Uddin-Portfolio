import { React, useState, useEffect, useRef } from "react";
import Scrollspy from 'react-scrollspy';
import { useCallback } from "react";
import { Link } from "react-router-dom";

import Socials from '../components/HomeComponents/Socials';
import Skills from '../components/HomeComponents/Skills';
import ProjectsSample from '../components/HomeComponents/ProjectsSample';
import MaintenanceButton from "../components/HomeComponents/MaintenanceButton";
import Header from "../components/HomeComponents/Header";
//import AnchorMonitor from "../components/AnchorMonitor";
import Description from "../components/HomeComponents/Description";

export default function Home() {
  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return {
        mobile: width < 1050 || height < 500,
        small: width < 850,
        medium: width < 1550,
      };
    }
    return { mobile: false, small: false, medium: false };
  });
  const [forceUpdate, setForceUpdate] = useState(0);  // ✅ Force re-render on resize

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = debounce(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({
        mobile: width < 1050 || height < 500,
        small: width < 850,
        medium: width < 1550,
        medium_large: width < 1600
      });

      setForceUpdate((prev) => prev + 1);  // ✅ Force update to trigger re-render
    }, 150);

    window.addEventListener("resize", handleResize);
    handleResize();  // ✅ Initialize screen size

    return () => window.removeEventListener("resize", handleResize);
  }, [forceUpdate]);

  return (
    <div className="home_container">
      {screenSize.mobile ? (
        <>
          <div className="content">
            <MaintenanceButton screenSize={screenSize} />
            <About screenSize={"mobile"} />
            <Skills />
            <ProjectsSample screenSize={"medium"} />
            <Socials />
            <Description />
          </div>
        </>
      ) : (
        <>
          <div className="main">
            <Main screenSize={screenSize} />
          </div>
          <div className="content">
            <About />
            <section id="skills" className="skills">
              <Skills />
            </section>
            <section id="projects" className="projects">
              <ProjectsSample />
            </section>
          </div>
        </>
      )}
    </div>
  );
}


const Anchors = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <section className="anchors">
      <Scrollspy
        items={['about', 'skills', 'projects']}
        currentClassName="active"
        rootEl=".content"
        onUpdate={(el) => {
          document.querySelectorAll('.link').forEach(link => {
            link.classList.remove('active');
          });

          if (el && el.id) {
            const activeLink = document.querySelector(`a[href="#${el.id}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        }}
      //onUpdate={(el) => setActiveSection(el ? el.id : '')}
      //onUpdate={(el) => console.log('Active section:', el && el.id)}

      >
        <a href="#about" className={`link ${activeSection === 'about' ? 'active' : ''}`}>About</a><br />
        <a href="#skills" className={`link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a><br />
        <a href="#projects" className={`link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
      </Scrollspy>
    </section>
  );
};

const Main = () => (
  <section className="main" id="main">
    <div className="main-content">
      <MaintenanceButton />
      <Anchors />
      <div className="bottom-desc">
        <Socials />
        <Description />
      </div>
    </div>
  </section>
);

const About = ({ activeLink, screenSize }) => (
  <section className="about" id="about">
    <div className="about-content" style={{ top: "1000%" }}>
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

