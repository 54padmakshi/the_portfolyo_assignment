// HeroSection.js

import React from 'react';

function HeroSection({ userData }) {
  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.bio}</p>
      {/* Other hero section content */}
    </div>
  );
}

export default HeroSection;
