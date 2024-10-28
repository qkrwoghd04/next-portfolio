"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react';

//Components
import Profile from './Profile'
import Hero from './Hero';


const sections = [
  { title: 'Section 1', script: <Hero /> },
  { title: 'Section 2', script: <Profile /> },
];

const FullPageTransition = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const scrollThreshold = useRef(50);
  const scrollAccumulator = useRef(0);


  const handleScroll = useCallback((direction) => {
    if (isScrolling) return;

    const now = Date.now();
    if (now - lastScrollTime.current < 50) return;
    lastScrollTime.current = now;

    setIsScrolling(true);
    if (direction === 'down' && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
    scrollAccumulator.current = 0;

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [currentSection, isScrolling]); // sections.length 제거


  const handleWheel = useCallback((e) => {
    e.preventDefault();

    scrollAccumulator.current += e.deltaY;

    if (Math.abs(scrollAccumulator.current) >= scrollThreshold.current) {
      if (scrollAccumulator.current > 0) {
        handleScroll('down');
      } else {
        handleScroll('up');
      }
      scrollAccumulator.current = 0;
    }
  }, [handleScroll]);

  const handleTouchStart = useCallback((e) => {
    if (isScrolling) return;

    const touch = e.touches[0];
    const startY = touch.pageY;
    let hasMoved = false;

    const handleTouchMove = (e) => {
      e.preventDefault();
      hasMoved = true;
    };

    const handleTouchEnd = (e) => {
      if (!hasMoved) {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        return;
      }

      const touch = e.changedTouches[0];
      const deltaY = touch.pageY - startY;

      if (Math.abs(deltaY) > scrollThreshold.current) {
        if (deltaY > 0) {
          handleScroll('up');
        } else {
          handleScroll('down');
        }
      }

      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  }, [handleScroll, isScrolling]);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      handleWheel(e);
    };

    document.addEventListener('wheel', wheelHandler, { passive: false });
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('wheel', wheelHandler);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleWheel, handleTouchStart]);

  return (
    <div className="h-screen w-full overflow-hidden fixed">
      {sections.map((section, index) => (
        <div
          key={index}
          className="absolute w-full h-full transition-transform duration-1000 ease-in-out overflow-y-scroll"
          style={{
            transform: `translateY(${(index - currentSection) * 100}%)`,
            zIndex: sections.length - index
          }}
        >
          <div className="flex items-center justify-center h-full">
            {section.script}
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                setCurrentSection(index);
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSection === index ? 'bg-black scale-125' : 'bg-gray-500 hover:bg-white/75'
              }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageTransition;