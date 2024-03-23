// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import TestimonialsSection from './TestimonialsSection';
import SocialMediaHandlesSection from './SocialMediaHandlesSection';

function App() {
  const [userData, setUserData] = useState({});
  const userId = "65b3a22c01d900e96c4219ae";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
     
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
   
  };

  return (
    <Router>
      <div>
        <nav>
         <h2> &nbsp; Navigate through the following </h2> 
          
          &nbsp; &nbsp;   <Link to="/">HeroSection</Link>  
        &nbsp;  <Link to="/services">Services</Link>   
        &nbsp;   <Link to="/projects">Projects</Link>
        &nbsp;    <Link to="/skills">Skills</Link>
        &nbsp;     <Link to="/testimonials">Testimonials</Link>
        &nbsp;      <Link to="/social-media">Social Media</Link>
            
        </nav>
        
        <Routes>
  <Route path="/" element={<HeroSection userData={userData} />} />
  <Route path="/services" element={<ServicesSection userData={userData} />} />
  <Route path="/projects" element={<ProjectsSection userData={userData} />} />
  <Route path="/skills" element={<SkillsSection userData={userData} />} />
  <Route path="/testimonials" element={<TestimonialsSection userData={userData} />} />
  <Route path="/social-media" element={<SocialMediaHandlesSection userData={userData} />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
