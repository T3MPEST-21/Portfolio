import React from 'react';
import {motion} from 'framer-motion'

const perks = [
  {
    title: "Built for Freelancers",
    description: "Taskhub isn’t a marketplace—it’s a launchpad. You’re not bidding endlessly; you’re building meaningful relationships."
  },
  {
    title: "Smart Collaboration Tools",
    description: "Message collaborators, join projects, or co-create with ease. We make teamwork intuitive and powerful."
  },
  {
    title: "Skill-Centered Communities",
    description: "Join niche groups based on what you love—whether it’s React, design, blockchain, or AI development."
  },
  {
    title: "Earn with Confidence",
    description: "Transparent workflows, secure payments, and feedback systems that put trust and professionalism first."
  }
];

const WhyUs = () => {
  return (
    <motion.section className="why-us"
    initial={{opacity: 0, x: -80 }}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 1}}>
      <h2>Why Choose Taskhub?</h2>
      <div className="perks-grid">
        {perks.map((perk, index) => (
          <div key={index} className="perk-card">
            <h3>{perk.title}</h3>
            <p>{perk.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyUs; 