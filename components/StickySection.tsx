import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from "react-icons/bi";

const StickySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const texts = [
    "Proactive",
    "Always-On",
    "Compatible",
    "Future-Oriented",
  ];

  const contents = [
    "회사와 저를 \n별개로 두지 않습니다 \n항상 능동적인 자세로 \n목표를 주도적으로 \n이루며 나아갑니다",
    "평일과 주말의\n 경계를 두지 않습니다 \n\'불금\'과 \'월요병\' \n저와는 무관한 단어입니다",
    "동료의 일과 나의 일을 \n구분하지 않습니다 \n함께할 때 더 큰 가치를 \n만들어낼 수 있다고 믿습니다",
    "현재와 미래를\n 분리하지 않습니다 \n지금의 성장은 곧 미래를 위한 \n밑거름이라 생각합니다"
  ]
  const backgroundColors = [
    "#005CFD",
    "#783BDD",
    "#E36E71",
    "#3ACFD9",
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
    <>
    <div ref={containerRef} className="h-[400vh]">
      <div className="sticky top-0 h-screen w-full -z-50 flex flex-col lg:flex-row 2xl:flex-row">
        <motion.div
          className="h-1/2 w-full flex items-center justify-center lg:h-full lg:w-1/2"
          animate={{
            backgroundColor: backgroundColors[currentIndex]
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            key={texts[currentIndex]}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-normal text-white 2xl:text-7xl"
          >
            {`{${texts[currentIndex]}}`}
          </motion.h1>
        </motion.div>
        <motion.div className="h-1/2 w-full bg-white flex flex-col items-center justify-between p-4 lg:h-full lg:w-1/2 2xl:p-12">
            <div className='flex flex-row justify-start items-center'>
              <BiSolidQuoteSingleLeft size={50}/>
              <BiSolidQuoteSingleLeft size={50}/>
            </div>
          <motion.h1 
            key={contents[currentIndex]}  
            initial={{ opacity:0 , y: 100}}
            animate={{ opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
            transition={{ duration: 0.5 }}        
            className='text-3xl font-normal text-black text-center whitespace-pre-wrap 2xl:text-6xl 2xl:leading-normal'
          >
            {contents[currentIndex]}
          </motion.h1>
            <div className='flex flex-row justify-start items-center'>
              <BiSolidQuoteSingleRight size={50}/>
              <BiSolidQuoteSingleRight size={50}/>
            </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default StickySection;