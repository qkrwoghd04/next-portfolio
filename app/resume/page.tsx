"use client"

import React, {useEffect} from 'react';
import ResumeSection from '../../components/ResumeSection';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return <ResumeSection />;
};

export default Resume;