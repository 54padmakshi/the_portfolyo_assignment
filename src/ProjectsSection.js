// ProjectsSection.js

import React from 'react';

function ProjectsSection({ userData }) {
  // Check if userData and userData.user are defined before accessing projects array
  if (!userData || !userData.user || !userData.user.projects) {
    return <div>No projects available</div>; // Return a message indicating no projects available
  }

  return (
    <div>
      <h2>&nbsp; Projects</h2>
      <ul>
        {userData.user.projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Live URL: {project.liveurl}</p>
            <p>Github URL: {project.githuburl}</p>
            <p>Title: {project.title}</p>
            <p><img src={project.image.url} alt={project.sequence} /></p>
            {/* You can add more details about the project as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsSection;


