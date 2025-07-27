import React, { useState, useEffect } from 'react';
import '../../assets/styles/ProjectPage.css';

const projects = [
  {
    title: "Build a React Job Board",
    description: "Looking for a frontend dev to help build a clean, responsive job listing site. Must be familiar with Tailwind.",
    tags: ["React", "Tailwind", "Frontend"]
  },
  {
    title: "Redesign a SaaS Dashboard",
    description: "Help revamp the UI/UX of an admin dashboard for an analytics app. Figma available.",
    tags: ["UI/UX", "Figma", "Design"]
  },
  {
    title: "Collaborate on a Crypto Wallet",
    description: "Seeking a fullstack dev to team up on an open-source wallet with React + Node.js.",
    tags: ["React", "Node.js", "Crypto"]
  }
];

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <h2>Explore Freelance Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <button className="apply-btn">View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;