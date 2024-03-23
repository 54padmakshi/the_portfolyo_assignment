// SocialMediaHandlesSection.js

import React from 'react';

function SocialMediaHandlesSection({ userData }) {
  // Check if userData and userData.user are defined before accessing social handles array
  if (!userData || !userData.user || !userData.user.social_handles) {
    return <div>No social media handles available</div>; // Return a message indicating no social media handles available
  }

  return (
    <div>
      <h2>&nbsp; Social Media Handles</h2>
      <div className="social-media-handles">
        {userData.user.social_handles.map((handle, index) => (
          <div key={index} className="social-media-handle">
            <img src={handle.image.url} alt={handle.platform} />
            <a href={handle.url} target="_blank" rel="noopener noreferrer">{handle.platform}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaHandlesSection;

