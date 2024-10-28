import React, { useRef, useEffect } from 'react'
import { useInView, motion } from "framer-motion"
import Lottie from "react-lottie-player";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

//Components
import ResumeJson from "../public/resume_ani.json";

const contacts = [
  { "icon": <FaPhoneAlt size={25}/>, "info": "010-3360-4104" },
  { "icon": <FaLocationDot size={25}/>, "info": "서울시 마포구" },
  { "icon": <IoMail size={25}/>, "info": "qkrwoghd04@naver.com" },
  { "icon": <FaLinkedin size={25}/>, "info": "LinkedIn" },
]

const ResumeSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return (
    <div ref={ref} className='relative w-full h-[100vh] flex flex-col overflow-hidden lg:flex-row 2xl:flex-row justify-center items-center'>
      <div className='w-full h-1/2 flex flex-col justify-center items-center p-8 pt-20 lg:pt-0 lg:w-1/2 lg:h-[85%] 2xl:w-1/2 2xl:h-full'
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <p className='text-3xl text-center leading-normal 2xl:text-6xl 2xl:leading-snug'>더 나은 성장을 위해 <br /> 새로운 가치를 찾아 <br /> 멈추지 않고 앞으로 <br />나아가겠습니다</p>
        <div className='w-36 h-36 pt-8 flex flex-col justify-center items-center 2xl:w-64 2xl:h-64'>
          <Lottie loop animationData={ResumeJson} play />
          <motion.a
            href="https://d3c3zgrht7r4md.cloudfront.net/"
            className="font-semibold text-l bg-gray-200 rounded-3xl p-4 2xl:text-3xl 2xl:p-8 hover:bg-blue-200"
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
          >
            RESUME
          </motion.a>
        </div>

      </div>
      <div className='w-full h-1/2 flex justify-center items-center p-8 lg:w-1/2 lg:h-[80%] 2xl:w-1/2 2xl:h-2/3'>
        <motion.div className='w-full h-full flex flex-col justify-between bg-black rounded-xl px-8 py-12 lg:justify-center'
          style={{
            transform : isInView ? "none" : "translateX(200px)",
            opacity : isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
        <h1 className='text-white text-3xl font-extralight lg:text-4xl lg:my-4 2xl:my-4 2xl:text-6xl'>Contacts</h1>
        {contacts.map((item, index) => (
          <div key={index} className='flex flex-row justify-start items-center text-white lg:my-4 2xl:my-8'>
            {item.icon}
            {item.info !== "LinkedIn" ? <p className='ml-4 text-xl font-extralight lg:text-2xl 2xl:text-4xl'>{item.info}</p> : <motion.a 
              href='https://www.linkedin.com/in/jaehong-park-12328a303/'
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className='ml-4 text-xl font-extralight lg:text-2xl 2xl:text-4xl'
            >
              LinkedIn Link
            </motion.a>}
          </div>
        ))}

      </motion.div>
    </div>

    </div >
  )
}

export default ResumeSection