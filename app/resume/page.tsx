"use client"

import React from 'react';
import Image from 'next/image'
import ResumeSection from '../../components/ResumeSection'
import HighSchoolImage from './assets/images/HighSchool.jpg';


const Resume = () => {
  const handlePrint = () => {
    const printWindow = window.open('https://d3c3zgrht7r4md.cloudfront.net/', '_blank');

    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print(); // 페이지가 로드된 후 인쇄 대화상자 열기
      };
    }
  };



  return (
    <>
      <ResumeSection >
        <div className='w-full h-[50%] flex flex-col justify-center items-center bg-[#005CFD]'>
          <p className='text-6xl text-white font-semibold'>&#123;가치 창출&#125;</p>
        </div>
      </ResumeSection>
      <ResumeSection>
        <div className='w-full h-1/2 flex flex-col justify-center items-center bg-[#783BDD]'>
          <p className='text-6xl text-white font-semibold'>&#123;끈기와 인내&#125;</p>
        </div>
      </ResumeSection>
      <ResumeSection>
        <div className='w-full h-1/2 flex flex-col justify-center items-center bg-[#E36E71]'>
          <p className='text-6xl text-white font-semibold'>&#123;소통과 협업&#125;</p>
        </div>
      </ResumeSection>
      <ResumeSection>
        <div className='w-full h-1/2 flex flex-col justify-center items-center bg-[#AFEBF0]'>
          <p className='text-6xl text-white font-semibold'>&#123;넓은 시야&#125;</p>
        </div>
      </ResumeSection>
    </>
  );
};

export default Resume;