import React from 'react'
import { motion, MotionConfig } from "motion/react"

const Gestures = () => {
  return (
    <div
    style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem"
    }}>
        <MotionConfig
        transition={{
            duration: 0.125,
            ease: "easeIn"
        }}
        >
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            >
                First Button
            </motion.button>
            <motion.button
            whileHover={{scale: 1.15}}
            whileTap={{scale: 0.85, rotate: "-2.5deg"}}
            >
                Second Button
            </motion.button>
        </MotionConfig>
    </div>
  )
}

export default Gestures