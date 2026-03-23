import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'
import { FiMail, FiInfo, FiCalendar, FiDownload } from 'react-icons/fi';
import { MdLightbulbOutline } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaIdBadge, FaGraduationCap } from 'react-icons/fa';
import './AboutMe.css';



import { PERSONAL_INFO } from '../../constants';

const AboutMe = () => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ozuu Chidiebere Divine - Resume.pdf';
    link.download = 'Ozuu_Chidiebere_Divine_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div className="about-section" id='about'
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1.5}}
    viewport={{ once: true, amount: 0.1 }}

    >
      <motion.h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>About Me</motion.h1>
      <motion.p>Discover my journey, passions, and story behind my work</motion.p>
      <div style={{display: 'flex'}} className='abt-container'>
        <motion.section className='abt-img'
        initial={{opacity: 0, x: -80}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1.5}}
        viewport={{ once: true, amount: 0.1 }}

        >
          <img src="/images/me.png" alt="img" />
        </motion.section>
        
        <motion.section className='abt-text'>
          <motion.div className='who-i-am'
          initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          viewport={{ once: true, amount: 0.5 }}
          >
            <span>
            <h3><FiInfo className='about-icon'  /> Who I am</h3>
            <p>I am a frontend developer with a deep passion for building beautiful, functional digital experiences. I specialize in transforming ideas into clean, responsive designs that feel modern and purposeful.</p>
            </span>
            <span>
            <h3><MdLightbulbOutline  className='about-icon' style={{fontWeight: 'bolder'}} /> My approach</h3>
            <p>My approach is rooted in simplicity, clarity, and precision. I focus on user-first design, blending visuals with function to create smooth, interactive interfaces.</p>
            </span>
          </motion.div>


            <motion.h2
            initial={{opacity: 0, x: 80}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true, amount: 0.1 }}
            >
              Personal Info
            </motion.h2>

          <motion.div className='personal-info'>

            <motion.section className='info liquid-glass'
              initial={{opacity: 0, x: 80}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span>< FaIdBadge  className='about-icon'/> <span className='info-tittle'>Name: </span> {PERSONAL_INFO.name} </span>
            </motion.section>
            
            <motion.section className='info liquid-glass'
              initial={{opacity: 0, x: 80}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span>< FiCalendar className='about-icon'/> <span className='info-tittle'>DOB: </span> {PERSONAL_INFO.dob} </span>
            </motion.section>
            
            <motion.section className='info liquid-glass'
              initial={{opacity: 0, x: 80}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span>< FaMapMarkerAlt className='about-icon'/> <span className='info-tittle'>Location: </span> {PERSONAL_INFO.pob} </span>
            </motion.section>

            <motion.section className='info liquid-glass'
              initial={{opacity: 0, x: 80}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className='email'>< FiMail className='about-icon'/> <span className='info-tittle'>Email: </span> {PERSONAL_INFO.email} </span>
            </motion.section>

            <motion.section className='info liquid-glass'
              initial={{opacity: 0, x: 80}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span>< FaPhone className='about-icon'/> <span className='info-tittle'>Phone: </span> {PERSONAL_INFO.phone} </span>
            </motion.section>

            <motion.section className='info liquid-glass'
              initial={{opacity: 0, x: 80}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span>< FaGraduationCap className='about-icon'/> <span className='info-tittle'>Edu: </span> {PERSONAL_INFO.education.split(',')[0]} </span>
            </motion.section>
          </motion.div>

          <motion.div className='abt-btns'>
            <button className='abt-btn'onClick={handleDownloadResume}> <FiDownload  style={{margin: '3px 10px 0 0'}}/>Download My Resume</button>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutMe;