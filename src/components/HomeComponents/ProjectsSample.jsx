import React, { useState, useEffect } from "react";

import ProjectClass from '../ProjectClass';
import Project from '../Project';
import placeHolderImage from '../../assets/placeholderImage.jpg';
import Header from './Header';

export default function ProjectsSample() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    createProjects();
  }, []);

  function createProjects() {
    const project1Description = `A website build using REACT that shows data about the world's volcanoes using an API. 
      The website uses SSL handshakes and encryption to ensure user data is not compromised when the user tries to
      register or login.`;
    const projects = [
      new ProjectClass('Volcanoes of the World', project1Description, 'link1', placeHolderImage, ['REACT', 'JavaScript','HTML','CSS'], 'place holder image'),
      new ProjectClass('title2', 'description2', 'link2', placeHolderImage, ['language21,language22'], 'place holder image'),
      new ProjectClass('title2', 'description2', 'link2', placeHolderImage, ['language21,language22'], 'place holder image'),
      new ProjectClass('title2', 'description2', 'link2', placeHolderImage, ['language21,language22'], 'place holder image'),
      new ProjectClass('title2', 'description2', 'link2', placeHolderImage, ['language21,language22'], 'place holder image')
    ]
    setProjects(projects);
  }
  return (
    <Projects projects={projects} />
  )
}

const Projects = ({ projects }) => (
  <section className="projects" id="projects">
    <div className="projects-content">
      <Header text ="Projects" />
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </section>
);