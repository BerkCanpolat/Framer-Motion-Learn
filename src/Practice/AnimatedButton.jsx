import React from 'react'
import { motion } from "motion/react";


const AnimatedButton = ({
    children,
    stiffness = 300,
    damping = 15,
}) => {
  return (
    <motion.button
    whileHover={{scale: 1.05, y: -2}}
    whileTap={{scale: .9, y: 1}}
    transition={{type: "spring", stiffness, damping}}
    >
        {children}
    </motion.button>
  )
}

export default AnimatedButton