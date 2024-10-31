import React, { useEffect } from 'react'
import { motion, useAnimate } from "framer-motion"

const Loader: React.FC = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const container = document.querySelector(".container") as HTMLElement;
    
    if (!container) return;

    const containerWidth = container.offsetWidth;

    const animateLoader = async () => {
      await animate([
        [scope.current, { x: 0, width: "100%" }],
        [scope.current, { x: containerWidth, width: "0%" }, { delay: 0.6 }]
      ], {
        repeat: Infinity,
        repeatDelay: 0.8
      });
    };

    animateLoader();
  }, [animate]);

  return (
    <div className="container relative w-full h-screen flex items-center justify-center bg-white">
      <motion.div 
        ref={scope} 
        className="loader absolute h-full bg-black" 
      />
      <h1 className='text text-white text-4xl'>
        <i>spotlight</i>
      </h1>
    </div>
  )
}

export default Loader