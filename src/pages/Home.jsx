import { React, useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import Scrollspy from 'react-scrollspy';

import Socials from '../components/HomeComponents/Socials';
import Skills from '../components/HomeComponents/Skills';
import ProjectsSample from '../components/HomeComponents/ProjectsSample';
import MaintenanceButton from "../components/HomeComponents/MaintenanceButton";
import Header from "../components/HomeComponents/Header";
//import AnchorMonitor from "../components/AnchorMonitor";
import Description from "../components/HomeComponents/Description";

function useForceRemount() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return key;
}


export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1049 });
  const layoutKey = isMobile ? "mobile" : "desktop";
  const remountKey = useForceRemount();

  const key = `${isMobile ? "mobile" : "desktop"}-${remountKey}`;

  return (
    <div className="home_container" key={key}>
      {isMobile ? (
        <>
          <div className="content">
            <MaintenanceButton />
            <About/>
            <Skills />
            <ProjectsSample/>
            <Socials />
            <Description />
          </div>
        </>
      ) : (
        <>
          <div className="main">
            <Main />
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

  useEffect(() => {
    return () => {
      // 🔥 Cleanup active classes on unmount
      document.querySelectorAll('.link').forEach(link => {
        link.classList.remove('active');
      });
    };
  }, []);

  return (
    <section className="anchors">
      <Scrollspy
        items={['about', 'skills', 'projects']}
        currentClassName="active"
        rootEl={typeof window !== "undefined" && document.querySelector('.content') ? ".content" : "body"}
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
      <Header text="About me" />
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
