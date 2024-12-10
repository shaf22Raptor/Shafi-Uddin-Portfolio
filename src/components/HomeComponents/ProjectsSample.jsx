import React, { useState, useEffect } from "react";

import ProjectClass from '../ProjectClass';
import Project from '../Project';
import placeHolderImage from '../../assets/placeholderImage.jpg';
import Header from './Header';

export default function ProjectsSample(screenSize) {
  const [projects, setProjects] = useState([]);

  console.log("Actual Screen Size in ProjectsSample:", screenSize);

  useEffect(() => {
    createProjects();
  }, []);

  function createProjects() {
    const project1Description = `A platform used designed to allow users to upload, share and stream their videos with each other.
    The website is implemented using AWS architecture, such as EC2, Application Load Balancer, Auto Scaling Groups, and serverless
    functions.`;
    const projects = [
      new ProjectClass('Video Streaming using AWS', project1Description, 'link1', placeHolderImage, ['REACT', 'AWS EC2','AWS S3','AWS Route53', 'AWS ALB', 'AWS RDS with mySQL', 'AWS LAMBDA ','AWS API Gateway'], 'place holder image'),
      new ProjectClass('title2', 'description2', 'link2', placeHolderImage, ['language21,language22'], 'place holder image'),
      new ProjectClass('title2', 'description2', 'link2', placeHolderImage, ['language21,language22'], 'place holder image'),
    ]
    setProjects(projects);
  }
  return (
    <Projects projects={projects} screenSize={screenSize} />
  )
}

const Projects = ({ projects, screenSize }) => (
  <section className="projects" id="projects">
    <div className="projects-content">
      <Header text ="Projects" />
      {projects.map((project, index) => (
        <Project key={index} project={project} screenSize={screenSize} />
      ))}
    </div>
  </section>
);