import React from "react";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <section className="socials">
      <div className="links">
        <Link to="https://github.com/shaf22Raptor?tab=overview&from=2024-08-01&to=2024-08-05"><i className="fab fa-github"></i><p>GitHub</p></Link>
        <Link to="https://www.linkedin.com/in/shafi-uddin-26b4b123a/"><i class="fa-brands fa-linkedin-in"></i><p>LinkedIn</p></Link>
        <a href="/Shafi Uddin Resume.pdf" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-file"></i>
          <p>Resume</p>
        </a>
      </div>
    </section>
  )
}