import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import Contact from './Contact';

const HomePage = () => {
  return (
    <main className="homepage">
      <Hero />
      <AboutMe />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;