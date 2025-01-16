import React, { useState, useEffect } from "react";

import ProjectClass from '../ProjectClass';
import Project from '../Project';
import placeHolderImage from '../../assets/placeholderImage.jpg';
import Header from './Header';

export default function ProjectsSample(screenSize) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    createProjects();
  }, []);

  function createProjects() {
    const project1Description = `A platform used designed to allow users to upload, share and stream their videos with each other.
    The website is implemented using AWS architecture, such as EC2, Application Load Balancer, Auto Scaling Groups, and serverless
    functions.`;

    const project2Description = `A full stack web service designed to use an API designed to serve data relating to the world's
    volcanoes to a react app. Data is stored on MySQL service, and a node server is designed to facilitate communication between
    the react app and the MySQL service.`

    const project3Description = `A full stack desktop app based on an assignment I completed in first year. Initially a command
    line application, I am now revamping it with all the skills I have learnt over the years. When finished, it will include a working GUI,
    and a backend service where data is stored using PostgreSQL.`

    const projects = [
      new ProjectClass('Video Streaming using AWS', project1Description, 'link1', placeHolderImage, ['REACT', 'AWS EC2','AWS S3','AWS Route53', 'AWS ALB', 'AWS RDS with mySQL', 'AWS LAMBDA ','AWS API Gateway'], 'place holder image'),
      new ProjectClass("Volcanoes of the World API", project2Description, 'link2', placeHolderImage, ['REACT', 'Node', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
      new ProjectClass("C# Auction House [In Progress]", project3Description, 'link2', placeHolderImage, ['C#', 'MySQL'], 'place holder image'),
    ]
    setProjects(projects);
  }
  return (
    <Projects projects={projects} screenSize={screenSize} />
  )
}

const Projects = ({ projects, screenSize, id }) => (
    <div className="projects-content">
      <Header text ="Projects" />
      {projects.map((project, index) => (
        <Project key={index} project={project} screenSize={screenSize} />
      ))}
    </div>
);