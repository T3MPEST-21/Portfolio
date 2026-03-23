import React, { useState, useEffect } from 'react';
import './Hero.css';

import {motion} from 'framer-motion';
import { FiTwitter, FiBriefcase, FiBarChart, FiGithub, FiInstagram, FiLinkedin, FiDownload, FiMail} from 'react-icons/fi';
import { FaJs, FaWhatsapp, FaReact} from 'react-icons/fa';
import { DiCss3, DiHtml5} from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiFlutter } from 'react-icons/si';


import { PERSONAL_INFO } from '../../constants';

const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  
  if (years <= 0) return 'Less than a year';
  return `${years} ${years === 1 ? 'year' : 'years'}`;
};

const Hero = ({ startDate = '2024-10-22' }) => {
  const [experience, setExperience] = useState('');

  useEffect(() => {
    setExperience(calculateExperience(startDate));
  }, [startDate]);


  return (
    <motion.section className="hero-section" id='home'
    initial={{opacity: 0, x: 80}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5}}
      viewport={{ once: true, amount: 0.1 }}
>
        <motion.div className="text-container"
          initial={{opacity: 0, y: 90}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: .6, delay: .4}}
          viewport={{ once: true, amount: 0.1 }}

          >
            <motion.h1 className="hero-h1"
            initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: .6}}
            viewport={{ once: true, amount: 0.1 }}

            >
              Hi, I'm {PERSONAL_INFO.name}, 
            </motion.h1>
            <motion.div style={{display: 'flex'}}
            initial={{opacity: 0, x:-90}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration:.6, delay: .9}}
            >
              <motion.span className="hero-span">
              {PERSONAL_INFO.title}
            </motion.span>
            <span className='cursor'></span>
            </motion.div>


            <motion.p className="hero-description"
            initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 1.2}}
            viewport={{ once: true, amount: 0.1 }}

            >
              {PERSONAL_INFO.description}
            </motion.p>

            <motion.section className="socials"
             initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 1.5}}
            viewport={{ once: true, amount: 0.1 }}

            >
              <motion.span>Follow me on: </motion.span>

              <motion.section className="social-icons">
                <motion.a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </motion.a>
                <motion.a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </motion.a>
                <motion.a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </motion.a>
                <motion.a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </motion.a>
              </motion.section>
            </motion.section>

              <motion.section className='hero-cta'
               initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 1.8}}
            viewport={{ once: true, amount: 0.1 }}

              >
                <a href="#projects">
                  <button className="cta1">< FiBriefcase style={{marginBottom: '-2px'}}/> Explore my project</button>
                </a>
                <a href="/Ozuu Chidiebere Divine - Resume.pdf" download="Ozuu_Chidiebere_Divine_Resume.pdf">
                  <button className="cta2"> <FiDownload style={{marginBottom: '-2px'}} /> Download my CV</button>
                </a>
              </motion.section>

              <motion.section className='hero-stats'
               initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 2}}
            viewport={{ once: true, amount: 0.1 }}

              >
                <p><FiBarChart/> Quick stats:</p>
                <motion.section className='hero-stats-container'>

                  <motion.span className="stats stats1 liquid-glass">
                    <FiBriefcase style={{marginTop: '5px'}} /> 
                    <section className='cta-span-text'>
                      <p>{experience}</p>
                      <p style={{fontSize: '9px'}}>Experience</p>
                    </section> 
                  </motion.span>

                  <motion.span className="stats stats2 liquid-glass"> <SiTypescript style={{marginTop: '6px'}} /> <section className='cta-span-text'><p>{PERSONAL_INFO.stats.mainLanguage.split('/')[0]}</p><p style={{fontSize: '9px'}}>Main Language</p></section> </motion.span>
                  <motion.span className="stats stats3 liquid-glass"><span style={{marginTop: '3px'}} >&lt;/&gt;</span> <section className='cta-span-text'><p>{PERSONAL_INFO.stats.totalProjects}</p><p style={{fontSize: '9px'}}>Total projects</p></section> </motion.span>
                </motion.section>
              </motion.section>
              
        </motion.div>

        <motion.div className='img-container'>
          <div className="image-wrapper">
            <img src="/images/me.png" alt="img" />
            <div className="language-icons">
              <motion.div className="language-icon html" style={{ '--speed': '4.5s' }} whileHover={{ rotate: 15 }}><DiHtml5 /></motion.div>
              <motion.div className="language-icon css" style={{ '--speed': '5s' }} whileHover={{ rotate: -15 }}><DiCss3 /></motion.div>
              <motion.div className="language-icon js" style={{ '--speed': '3.8s' }} whileHover={{ rotate: 20 }}><FaJs /></motion.div>
              <motion.div className="language-icon react" style={{ '--speed': '6s' }} whileHover={{ rotate: -20 }}><FaReact /></motion.div>
              <motion.div className="language-icon typescript" style={{ '--speed': '4.2s' }} whileHover={{ rotate: 10 }}><SiTypescript /></motion.div>
              <motion.div className="language-icon react-native" style={{ '--speed': '5.5s' }} whileHover={{ rotate: -10 }}><FaReact /></motion.div>
              <motion.div className="language-icon nextjs" style={{ '--speed': '4.8s' }} whileHover={{ rotate: 5 }}><SiNextdotjs /></motion.div>
              <motion.div className="language-icon flutter" style={{ '--speed': '5.2s' }} whileHover={{ rotate: -5 }}><SiFlutter /></motion.div>
            </div>
          </div>
        </motion.div>
      
    </motion.section>
  );
};

export default Hero;