// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from './HeroSection';
//import ServicesSection from './components/ServicesSection';
//import ProjectsSection from './components/ProjectsSection';
//import SkillsSection from './components/SkillsSection';
//import TestimonialsSection from './components/TestimonialsSection';
//import SocialMediaHandlesSection from './components/SocialMediaHandlesSection';

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
    <div>
      <HeroSection userData={userData} />
     {/*
     <ServicesSection userData={userData} /> 
      <ProjectsSection userData={userData} />
      <SkillsSection userData={userData} />
      <TestimonialsSection userData={userData} />
      <SocialMediaHandlesSection userData={userData} />
     */ } 
     
      
      
    </div>
  );
}

export default App;
