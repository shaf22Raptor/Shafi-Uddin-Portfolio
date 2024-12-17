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
    <section className="skills" id="skills">
      <div className="contact">
        <Header text="My skills"  activeLink = {activeLink} />
        <SkillsList skills = {skills}/> 
      </div>
    </section>
  );
}

const SkillsList = ({ skills }) => (
  <section className="skills-list">
  {skills.map((skill, index) => (
    <p key={index}>{skill}</p>
  ))}
</section>
);