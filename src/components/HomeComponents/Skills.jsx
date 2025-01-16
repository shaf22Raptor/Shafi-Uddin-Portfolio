import React from "react";

import Header from './Header';

export default function Skills({activeLink}) {
  const skills = [
    'Java',
    'Javascript',
    'React',
    'HTML',
    'CSS',
    'Python',
    'Express',
    'Node',
    'C#',
    'C',
    'Git',
    'mySQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Cloudflare'
  ]
  return (
      <div className="contact">
        <Header text="My skills" />
        <SkillsList skills = {skills}/> 
      </div>
  );
}

const SkillsList = ({ skills }) => (
  <div className="skills-list">
  {skills.map((skill, index) => (
    <p key={index}>{skill}</p>
  ))}
</div>
);