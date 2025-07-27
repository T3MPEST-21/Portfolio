import React from 'react';

const communities = [
  {
    name: "React Developers",
    description: "Share ideas, debug together, and discover the best React gigs out there.",
    members: 1320
  },
  {
    name: "UI/UX Creators",
    description: "Designers unite. Feedback loops, inspiration boards, and project invites.",
    members: 860
  },
  {
    name: "Fullstack Nigeria",
    description: "Tech talent in Naija—devs, designers, and innovators building for the future.",
    members: 420
  }
];

const CommunityPage = () => {
  return (
    <section className="community-page">
      <h2>Find Your People</h2>
      <p className="intro">Join a crew of freelancers who speak your language. Collaborate, share, and grow together.</p>
      <div className="community-grid">
        {communities.map((group, index) => (
          <div key={index} className="community-card">
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            <span className="members">{group.members} members</span>
            <button className="join-btn">Join Community</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityPage; 