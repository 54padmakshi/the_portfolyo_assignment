// HeroSection.js

import React from 'react';

function HeroSection({ userData }) {
    console.log(userData);
  // Check if userData is defined and contains the expected structure
  if (!userData || !userData.user || !userData.user.about) {
    return <div>Loading...</div>; // Or display an error message
  }

  // Destructure the userData object to access the about object
  const { about } = userData.user;

  return (
    <div>
      <h2> &nbsp; Hero Section</h2>
      <h1>{about.name}</h1>
      <p>{about.title}</p>
      {/* Display other fields from the about object as needed */}
    </div>
  );
}

export default HeroSection;


