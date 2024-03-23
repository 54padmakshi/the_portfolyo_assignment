// ServicesSection.js

import React from 'react';

function ServicesSection({ userData }) {
  // Check if userData and userData.user are defined before accessing services array
  if (!userData || !userData.user || !userData.user.services) {
    return <div>No services available</div>; // Return a message indicating no services available
  }

  return (
    <div>
      <h2>&nbsp; Services</h2>
      <ul>
        {userData.user.services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3> 
             <div> <p><b>Description</b> - {service.desc} </p> 
                    <p> <b>charge</b> : {service.charge} </p> 
               
                </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesSection;


