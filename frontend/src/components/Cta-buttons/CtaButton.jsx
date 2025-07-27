import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion'


const CTASection = () => { 
    return ( 
    <motion.section className="cta-section"
    initial={{opacity: 0, x: 80 }}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 1}}> 
        <motion.section className='cta-text'>
          <h2 className="cta-title">Ready to Join the Future of Freelance?</h2> 
          <p className="cta-subtitle">Get started with taskhub today and streamline your workflow</p> 
          <motion.div className='cta'
          initial={{opacity: 0, y: 80 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1}} >
          <a href="/signup"><button className="cta-btn">Join Now</button></a>
          <a href="/about"><button className="cta-btn2">View More</button></a>
        </motion.div>
        </motion.section>
        <motion.section whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src="/images/cta-image.png" alt="" />
        </motion.section>
    </motion.section> 

    ); 
};

export default CTASection; 