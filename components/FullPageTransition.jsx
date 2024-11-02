"use client"

import React, { useState, useCallback, useRef } from 'react';
import { lazy, Suspense } from 'react';

// Lazy load components
const Hero = lazy(() => import('./Hero'));
const Profile = lazy(() => import('./Profile'));
const Feedback = lazy(() => import('./FeedbackSection'));

const sections = [
  { title: 'Section 1', Component: Hero },
  { title: 'Section 2', Component: Profile },
  { title: 'Section 3', Component: Feedback }
];

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full" />
  </div>
);

const FullPageTransition = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const touchStartY = useRef(0);
  const scrollThreshold = useRef(50);
  const scrollAccumulator = useRef(0);
  
  // Debounced scroll handler with accumulator
  const handleScroll = useCallback((direction) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    if (direction === 'down' && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }

    // Reset accumulator
    scrollAccumulator.current = 0;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [currentSection, isScrolling]);

  // Optimized wheel handler
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    scrollAccumulator.current += e.deltaY;

    if (Math.abs(scrollAccumulator.current) >= scrollThreshold.current) {
      requestAnimationFrame(() => {
        handleScroll(scrollAccumulator.current > 0 ? 'down' : 'up');
      });
    }
  }, [handleScroll]);

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaY) > scrollThreshold.current) {
      handleScroll(deltaY > 0 ? 'up' : 'down');
    }
  }, [handleScroll]);

  return (
    <div 
      className="h-screen w-full overflow-hidden fixed"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {sections.map((section, index) => {
        const { Component } = section;
        return (
          <div
            key={index}
            className="absolute w-full h-full transition-transform duration-1000 ease-in-out will-change-transform"
            style={{
              transform: `translateY(${(index - currentSection) * 100}%)`,
              zIndex: sections.length - index,
              // Only render sections that are currently visible or adjacent
              visibility: Math.abs(index - currentSection) > 1 ? 'hidden' : 'visible'
            }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <div className="flex items-center justify-center h-full">
                <Component />
              </div>
            </Suspense>
          </div>
        );
      })}

      <nav 
        className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10"
        role="navigation"
        aria-label="Page navigation"
      >
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-black scale-125' 
                : 'bg-gray-500 hover:bg-white/75'
            }`}
            aria-label={`Go to section ${index + 1}`}
            aria-current={currentSection === index ? 'true' : 'false'}
          />
        ))}
      </nav>
    </div>
  );
};

export default FullPageTransition;