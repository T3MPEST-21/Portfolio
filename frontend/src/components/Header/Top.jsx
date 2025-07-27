import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const TopBar = () => {


  return (
      <motion.section className='top-bar'>
        <marquee behavior="" direction="">
          🎉 Welcome to TaskHub — Nigeria's trusted freelance and service platform!
        </marquee>
    </motion.section>
  );
};

export default TopBar;