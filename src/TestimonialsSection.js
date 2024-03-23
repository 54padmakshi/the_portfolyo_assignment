// TestimonialsSection.js

import React from 'react';

function TestimonialsSection({ userData }) {
  // Check if userData and userData.user are defined before accessing testimonials array
  if (!userData || !userData.user || !userData.user.testimonials) {
    return <div>No testimonials available</div>; // Return a message indicating no testimonials available
  }

  return (
    <div>
      <h2> &nbsp; Testimonials</h2>
      <div className="testimonials">
        {userData.user.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image.url} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.position}</p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;

