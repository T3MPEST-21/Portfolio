import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { FiTwitter, FiBriefcase, FiBarChart, FiGithub, FiInstagram, FiLinkedin, FiDownload, FiMail} from 'react-icons/fi';
import { FaJs, FaHtml5, FaReact} from 'react-icons/fa';
import { DiCss3, DiHtml5} from 'react-icons/di';


const Hero = () => {

  return (
    <motion.section className="hero-section" id='home'
    initial={{opacity: 0, x: 80}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5}}
      viewport={{ once: true, amount: 0.5 }}>
        <motion.div className="text-container"
          initial={{opacity: 0, y: 90}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: .6, delay: .4}}
          viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1 className="hero-h1"
            initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: .6}}
            viewport={{ once: true, amount: 0.5 }}
            >
              Hi, I'm Ozuu Chidiebere Divine, 
            </motion.h1>
            <motion.div style={{display: 'flex'}}
            initial={{opacity: 0, x:-90}}
            whileInView={{opacity: 1, x:0}}
            transition={{duration:.6, delay: .9}}
            >
              <motion.h3 className="hero-h3">
              Frontend Developer & UI/UX Designer 
            </motion.h3>
            <span className='cursor'></span>
            </motion.div>


            <motion.p className="hero-description"
            initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 1.2}}
            viewport={{ once: true, amount: 0.5 }}
            >
              I craft immersive digital experiences through modern web development and thoughtful design. From sleek interfaces to responsive layouts, I bring ideas to life with precision and creativity, I build projects that are not only functional - but unforgettable.
            </motion.p>

            <motion.section className="socials"
             initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 1.5}}
            viewport={{ once: true, amount: 0.5 }}
            >
              <motion.span>Follow me on: </motion.span>

              <motion.section className="social-icons"
              
              >
                <motion.a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </motion.a>
                <motion.a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </motion.a>
                <motion.a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FiInstagram />
                </motion.a>
                <motion.a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </motion.a>
              </motion.section>
            </motion.section>

              <motion.section className='hero-cta'
               initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 1.8}}
            viewport={{ once: true, amount: 0.5 }}
              >
                <button className="cta1">< FiDownload style={{marginBottom: '-2px'}}/> Explore my project</button>
                <button className="cta2"> <FiMail style={{marginBottom: '-2px'}} /> Download my CV</button>
              </motion.section>

              <motion.section className='hero-stats'
               initial={{opacity: 0, x: -90}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: .6, delay: 2}}
            viewport={{ once: true, amount: 0.5 }}
              >
                <p><FiBarChart/> Quick stats:</p>
                <motion.section style={{display: 'flex'}}>
                  <motion.span className="stats stats1"><FiBriefcase style={{marginTop: '5px'}} /> <section className='cta-span-text'><p>1 year</p><p style={{fontSize: '9px'}}>Eperience</p></section> </motion.span>
                  <motion.span className="stats stats2"> <FaJs style={{marginTop: '6px'}} /> <section className='cta-span-text'><p>JavaScript</p><p style={{fontSize: '9px'}}>Main Language</p></section> </motion.span>
                  <motion.span className="stats stats3"><span style={{marginTop: '3px'}} >&lt;/&gt;</span> <section className='cta-span-text'><p>1 Project</p><p style={{fontSize: '9px'}}>Total projects</p></section> </motion.span>
                </motion.section>
              </motion.section>
              
        </motion.div>

        <motion.div className='img-container'>
          < DiHtml5 className='language-icon html' />
          < DiCss3 className='language-icon css' />
          < FaReact className='language-icon react' />
          < FaJs className='language-icon js' />
          <img src="/images/me.jpg" alt="img"/>
        </motion.div>
      
    </motion.section>
  );
};

export default Hero;



/*<motion.h1
      initial={{opacity: 0, scale: .5}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1.5, delay: .4}}
      className="hero-quote">
        {dailyQuote()}
      </motion.h1>

      <a href="/signup">
        <motion.button
         className='hero-cta'
         initial={{opacity: 0, width: '1px'}}
         whileInView={{opacity: 1, width: '12rem'}}
         transition={{duration: 2, ease:'linear', delay: .4}}
         onAnimationComplete={()=> setshowText(true)}>
          {showText && (
            <motion.span initial={{opacity: 0, y: 90}} animate={{opacity: 1, y: 0}} transition={{duration: .6}}>Get Started</motion.span>
            )}
        </motion.button></a> */