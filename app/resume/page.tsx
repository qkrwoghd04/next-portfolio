"use client"

import React from 'react';

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
    <div className="w-screen h-screen flex justify-center items-center">
      <button 
        onClick={handlePrint}
        className="px-4 py-2 border-[1px] border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
      >
        이력서 보기
      </button>
    </div>
  );
};

export default Resume;