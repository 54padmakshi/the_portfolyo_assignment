// SkillsSection.js

import React from 'react';

function SkillsSection({ userData }) {
  // Check if userData and userData.user are defined before accessing skills array
  if (!userData || !userData.user || !userData.user.skills) {
    return <div>No skills available</div>; // Return a message indicating no skills available
  }

  return (
    <div>
      <h2>&nbsp; Skills</h2>
      <ul>
        {userData.user.skills.map((skill, index) => (
          <li key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <p>Percentage: {skill.percentage}%</p>
            {/* You can add more details about the skill as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;


