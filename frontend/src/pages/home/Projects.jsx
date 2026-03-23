import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from 'react-icons/fa';
import { PROJECTS } from '../../constants';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.div 
                className="projects-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}

            >
                <h1>Featured Work</h1>
                <p>A showcase of my recent mobile and web developments</p>
            </motion.div>

            <div className="projects-grid">
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index}
                        className="project-card liquid-glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.1 }}

                    >
                        <div className="project-image-container">
                            <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
                loading="lazy"
              />
                            <div className="project-overlay">
                                <span className="project-type"><FaMobileAlt /> {project.type}</span>
                            </div>
                        </div>
                        
                        <div className="project-content">
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-links">
                                <a href={project.github} className="project-link"><FaGithub /> Code</a>
                                <a href={project.demo} className="project-link"><FaExternalLinkAlt /> Demo</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
