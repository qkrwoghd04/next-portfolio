import React, { useState } from 'react'
import useMenuAnimation from './MenuAnimation'
import { motion } from 'framer-motion'

const FeedbackSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <section className='h-[100vh] w-full flex flex-col justify-center items-center'>

      <div className='h-1/2 w-full flex justify-center items-center p-12'>
        <p className='text-3xl font-extralight text-center'>피드백을 통해 <br />더욱 개선하도록 하겠습니다</p>
      </div>
      <div className='h-1/2 w-full flex justify-center items-center bg-green-300 p-4'>
        <div className='h-full w-full flex flex-col justify-between items-center'>
          <h1 className='text-3xl font-extralight'>Feedback</h1>
          <p>job</p>
          <p>contents</p>
          <nav className="menu w-[300px]" ref={scope}>
            <div
              style={{
                position: "fixed",
                bottom: -210,
                left: 200,
                width: 100,
                height: 100,
                background: "white",
              }}
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className='bg-white font-bold border-none rounded-2xl px-5 py-2 text-xl cursor-pointer w-full flex items-center justify-between'
            >
              Menu
              <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </div>
            </motion.button>
            <ul
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50% round 10px)",
              }}
              className='flex flex-col gap-3 bg-gray-50'
            >
              <li>Item 1 </li>
              <li>Item 2 </li>
              <li>Item 3 </li>
              <li>Item 4 </li>
              <li>Item 5 </li>
            </ul>{" "}
          </nav>

        </div>
      </div>
    </section>
  )
}

export default FeedbackSection