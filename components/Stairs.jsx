import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}


const reverseIndex = (index) => {
  const totalSteps = 10;
  return totalSteps - index - 1;
}
const Stairs = () => {
  return (
    <>
      {/* 6가지의 divs 모션을 렌더링 한다 */}
      {[...Array(10)].map((_, index) => {
        return (
          <motion.div key={index} variants={stairAnimation} initial="initial"
            animate="animate" exit="exit" transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  )
}

export default Stairs