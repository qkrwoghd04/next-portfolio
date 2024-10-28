"use client"

import React, {useEffect} from 'react';
import StickySection from '../../components/StickySection';
import ResumeSection from '../../components/ResumeSection';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <StickySection />
      <ResumeSection />
    </>
  )
};

export default Resume;