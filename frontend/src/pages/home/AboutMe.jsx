import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'
import { FiMail, FiInfo, FiCalendar, FiDownload } from 'react-icons/fi';
import { MdLightbulbOutline } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaIdBadge, FaGraduationCap } from 'react-icons/fa';


const AboutMe = () => {

  const download = () => {
    Swal.fire({
      title: 'Sorry!',
      html: 'My Resume is not available at the moment, Please try again later.',
      icon: 'info',
      confirmButtonText: 'Understood', 
      customClass: {
    popup: 'download-popover',
    title: 'popover-title',
    htmlContainer: 'popover-text',
    confirmButton: 'popover-confirm',
    icon: 'popover-icon'
  }
    });
  }

  return (
    <motion.div className="about-section" id='about'
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1.5}}
    viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>About Me</motion.h1>
      <motion.p>Discover my journey, passions, and story behind my work</motion.p>
      <div style={{display: 'flex'}} className='abt-container'>
        <motion.section className='abt-img'
        initial={{opacity: 0, x: -80}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1.5}}
        viewport={{ once: true, amount: 0.5 }}
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
            transition={{duration: 1.5, delay: 0.2 }}
            viewport={{once: true, amount: 0.5}}
            >Personal Info</motion.h2>
          <motion.div className='personal-info'>
            <div>
              <motion.section className='info'
              initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
              >
                <span>< FaIdBadge  className='about-icon'/> <span className='info-tittle'>Name: </span> Ozuu Chidiebere Divine </span>
              </motion.section>
              <motion.section className='info'
              initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
              >
                <span>< FiCalendar className='about-icon'/> <span className='info-tittle'>Date of birth: </span> 24 Jan 2004 </span>
              </motion.section>
              <motion.section className='info'
              initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
              >
              <span>< FaMapMarkerAlt className='about-icon'/> <span className='info-tittle'>Place of birth: </span> Abia State, Nigeria </span>
              </motion.section>
            </div>
            
            <div className='sec'>
              <motion.section className='info'
              initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
              >
              <span className='email'>< FiMail className='about-icon'/> <span className='info-tittle'>Email: </span> <span>Chidiebereozuu@gmail.com</span> </span>
              </motion.section>
              <motion.section className='info'
              initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
              >
              <span>< FaPhone className='about-icon'/> <span className='info-tittle'>Phone: </span> +234 701 723 7002</span>
              </motion.section>
              <motion.section className='info'
              initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 1.2 }}
          viewport={{ once: true, amount: 0.5 }}
              >
              <span>< FaGraduationCap className='about-icon' style={{fontSize: '27px', padding: '0 4px'}}/> <span className='info-tittle'>Education: </span> Michael Okpara University of Agriculture, Umudike </span>
              </motion.section>
            </div>
          </motion.div>
          <motion.div className='abt-btns'>
            <button className='abt-btn'onClick={download}> <FiDownload  style={{margin: '3px 10px 0 0'}}/>Download My Resume</button>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutMe;