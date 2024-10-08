
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[290px] h-[290px] xl:w-[490px] xl:h-[490px] mix-blend-lighten absolute"
          style={{
            maskImage: 'radial-gradient(circle, black 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle, black 10%, transparent 100%)'
          }}
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={90}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[505px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www/w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ACA7A6"
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo