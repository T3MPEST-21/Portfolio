import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';
import './Skills.css';

// Specific icon imports to keep the bundle small
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiExpo, SiFlutter, SiDart, SiFirebase, SiSupabase } from 'react-icons/si';
import { DiHtml5, DiCss3 } from 'react-icons/di';

const ICON_MAP = {
    SiNextdotjs: <SiNextdotjs />,
    FaReact: <FaReact />,
    SiTypescript: <SiTypescript />,
    FaJs: <FaJs />,
    DiHtml5: <DiHtml5 />,
    DiCss3: <DiCss3 />,
    SiExpo: <SiExpo />,
    SiFlutter: <SiFlutter />,
    SiDart: <SiDart />,
    FaNodeJs: <FaNodeJs />,
    FaGitAlt: <FaGitAlt />,
    SiSupabase: <SiSupabase />,
    SiFirebase: <SiFirebase />
};

const IconRenderer = ({ iconName, color }) => {
    const IconComponent = ICON_MAP[iconName];
    
    if (!IconComponent) return null;
    
    // Applying color directly to the rendered component
    return React.cloneElement(IconComponent, { style: { color } });
};


const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="skills-section" id="skills">
            <motion.div 
                className="skills-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.1 }}

            >
                <h2>My Toolkit</h2>
                <p>The technologies and tools I use to bring ideas to life.</p>
            </motion.div>

            <div className="skills-container">
                {SKILLS.map((category, catIdx) => (
                    <div key={catIdx} className="skills-category-group">
                        <motion.h3 
                            className="category-title"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: catIdx * 0.2 }}
                            viewport={{ once: true, amount: 0.1 }}

                        >
                            {category.category}
                        </motion.h3>
                        
                        <motion.div 
                            className="skills-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}

                        >
                            {category.items.map((skill, skillIdx) => (
                                <motion.div 
                                    key={skillIdx}
                                    className="skill-card liquid-glass"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="skill-icon-wrapper">
                                        <IconRenderer iconName={skill.icon} color={skill.color} />
                                    </div>
                                    <p className="skill-name">{skill.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
