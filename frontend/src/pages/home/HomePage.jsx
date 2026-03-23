import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Testimonials from './Testimonials';

import Contact from './Contact';

const HomePage = () => {
  return (
    <main className="homepage">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Testimonials />

      <Contact />
    </main>
  );
};


export default HomePage;