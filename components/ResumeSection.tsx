import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const texts = [
    "가치 창출",
    "끈기와 인내",
    "소통과 협업",
    "넓은 시야",
  ];

  const backgroundColors = [
    "#005CFD",
    "#783BDD",
    "#E36E71",
    "#AFEBF0",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight) {
        setCurrentIndex(0);
      } else if (scrollPosition < windowHeight * 2) {
        setCurrentIndex(1);
      } else if (scrollPosition < windowHeight * 3) {
        setCurrentIndex(2);
      } else {
        setCurrentIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh]">
      <div className="sticky top-0 h-screen w-full -z-50">
        <motion.div
          className="h-1/2 w-full flex items-center justify-center"
          animate={{
            backgroundColor: backgroundColors[currentIndex]
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            key={texts[currentIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-semibold text-white"
          >
            {`{${texts[currentIndex]}}`}
          </motion.h1>
        </motion.div>
        <div className="h-1/2 w-full bg-white flex items-center justify-center">
          <p className="text-4xl text-black font-semibold">&#123;안녕하세요&#125;</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;